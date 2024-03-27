import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import "dotenv/config";
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Lets start mongodb crud operations!!!");
});

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB database");
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 3000...");
    });
  })
  .catch((err) => {
    console.log("Failed to connect to Mongodb database");
  });
