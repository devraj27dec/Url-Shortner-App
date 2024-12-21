import * as dotenv from "dotenv";
dotenv.config()
import express , {Request , Response} from "express";
import cors from "cors";
const port = process.env.PORT || 5001;
import connectDB from "./config/Conn";
import ShortUrlRouter from "./routes/ShortUrl.routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req: Request, res : Response) => {
  res.send("Hello World!");
});

app.use("/api", ShortUrlRouter);

connectDB();
app.listen(port, () => {
  console.log(`server running at port : ${port}`);
});
