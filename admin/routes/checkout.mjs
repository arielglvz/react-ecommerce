import { Router } from 'express';
import Stripe from 'stripe';
import cors from 'cors';

// Create router instance
const router = Router();

// Enable CORS for your frontend domain (adjust the origin as needed)
router.use(cors({
  origin: 'https://react-ecommerce-ofnn.vercel.app', // Frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Your Stripe Secret Key
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Ensure the secret key is present
if (!stripeSecretKey) {
  console.error('Stripe secret key is missing');
  process.exit(1); // Stop the server if the key is not set
}

router.post('/checkout', async (req, res) => {
  // Initialize Stripe with your secret key
  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });

  try {
    // Get items and email from request body
    const { items, email } = req.body;

    // Map items to the format Stripe expects
    const lineItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd', // Ensure currency is correct
        unit_amount: item.discountedPrice * 100, // Convert to cents (Stripe expects integer value)
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images,
        },
      },
    }));

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://react-ecommerce-ofnn.vercel.app/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://react-ecommerce-ofnn.vercel.app/cancel',
      metadata: {
        email,
      },
    });

    // Send response with session ID
    res.json({
      message: 'Checkout session created successfully',
      success: true,
      id: session.id,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
