import "dotenv/config";
import cookieParser from "cookie-parser";
import express from "express";
// * routes file
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send("Server is alive ");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
