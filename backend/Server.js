const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const allowedOrigins = ['https://fullstacklinkedup.netlify.app'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));

app.use(express.json());

const authRoutes = require("./Routes/Auth");
const profileRoutes = require("./Routes/Profile");
const postRoutes = require("./Routes/Posts");

app.use("/api", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
