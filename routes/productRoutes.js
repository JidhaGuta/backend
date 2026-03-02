const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Only Farmer can create product
router.post(
  "/products",
  authMiddleware,
  roleMiddleware("Farmer"),
  productController.createProduct,
);

// Everyone logged in can view products
router.get("/products", authMiddleware, productController.getProducts);

module.exports = router;
