import express, { json } from "express";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import "dotenv/config.js";

const port = process.env.PORT;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}), json(), cookieParser());

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, '../client/public/uploads');
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port || 8800, () => {
  try {
    console.log("===============");
    console.log(`📡 - Conectado : ${port}`);
    console.log("===============");
  } catch (error) {
    console.log(`❌ - Error: ${error}`)
  }
});