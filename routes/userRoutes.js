const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

// Only Farmer can view users
router.get(
  "/users",
  authMiddleware,
  roleMiddleware("Farmer"),
  userController.getUsers,
);

module.exports = router;
