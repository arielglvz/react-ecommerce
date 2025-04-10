import { Router } from "express";
import { highlightsProducts } from "../constants/index.mjs";
import cors from 'cors';

const router = Router();

// Add CORS middleware for the frontend domain
router.use(cors({
  origin: 'https://react-ecommerce-ofnn.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

router.get("/highlights", (req, res) => {
  res.send(highlightsProducts);
});

export default router;  