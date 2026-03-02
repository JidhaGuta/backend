const Product = require("../models/productModel");

// Create Product (Farmer only)
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const product = new Product({
      name,
      price,
      description,
      farmer: req.user.id,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("farmer", "name email");
  res.json(products);
};
