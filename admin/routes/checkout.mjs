import { Router } from 'express';
import Stripe from 'stripe';
const router = Router();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

router.post('/checkout', async (req, res) => {
  // * I you want to use the specific version you can add the second param [NO second parameter means it will use the latest version]
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-06-20"
  });
  // const stripe = new Stripe(stripeSecretKey);
  try {
    const { items, email } = await req.body;

    const extractingItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd', //! --double check
        unit_amount: item.discountedPrice * 100, //! --check why?
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images,
        },
      }
    }))
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: extractingItems,
      mode: 'payment',
      // success_url: 'https://supergear-react-ecommerce.vercel.app/success?session_id={CHECKOUT_SESSION_ID}',
      success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      // cancel_url: 'https://supergear-react-ecommerce.vercel.app//cancel',
      cancel_url: 'http://localhost:5173/cancel',
      metadata: {
        email,
      }
    });

    res.json({
      message: 'Server is connected',
      success: true,
      id: session.id,
      // session,
    })
  } catch (error) {
    res.status(500).json({ error: error });
  }
})

export default router;