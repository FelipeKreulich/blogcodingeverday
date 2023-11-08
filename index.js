import express, { json } from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import "dotenv/config.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}), json());
app.use(cookieParser());

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
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(process.env.PORT || 8800, () => {
  console.log("=============")
  console.log("Conectado!");
  console.log("=============")
});