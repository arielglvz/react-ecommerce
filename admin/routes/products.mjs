import { Router } from "express";
import { products } from "../constants/index.mjs";
import cors from 'cors';

const router = Router();

// Add CORS middleware for the frontend domain
router.use(cors({
  origin: 'https://react-ecommerce-ofnn.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

router.get("/products", (req, res) => {
  res.send(products);
});

router.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single Phone was not found" });
  }
  res.send(product);
});

export default router;