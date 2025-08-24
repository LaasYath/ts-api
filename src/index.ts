import express, { Request, Response } from "express";
import makeupRoutes from "./routes/makeupRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", makeupRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the API project!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});