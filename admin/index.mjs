import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync } from "fs";

// Port configuration
const port = process.env.PORT || 8000;

// CORS configuration
const corsOptions = {
  origin: 'https://react-ecommerce-ofnn.vercel.app', // Allow only this frontend
  method: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

// Apply CORS middleware globally with the above options
app.use(cors(corsOptions));
// app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load all routes dynamically from the routes directory
const routesPath = path.resolve(__dirname, "./routes");
const routeFiles = readdirSync(routesPath);
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/", routeModule.default);
});

// Serve static files from the 'public' folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));   
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});