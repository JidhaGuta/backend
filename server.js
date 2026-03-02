require("dotenv").config();
const express = require("express");
const cors = require("cors"); // ✅ add this
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS
app.use(cors());

// ✅ If you want to allow specific origin only (production example)
// app.use(cors({
//   origin: "https://your-flutter-web-domain.com",
//   credentials: true
// }));

app.use(express.json());

connectDB();

app.use("/", userRoutes);
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
