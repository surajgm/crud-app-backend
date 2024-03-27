import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import Product from "./models/product.model.js";

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
  .connect(
    "mongodb+srv://suraj:suraj@backenddbintegration.l3aoclo.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("Connected to MongoDB database");
    app.listen(3000, () => {
      console.log("Listening on port 3000...");
    });
  })
  .catch((err) => {
    console.log("Failed to connect to Mongodb database");
  });
