import express from "express";
import cors from "cors"; // ✅ import cors
import data from "./data.js";

const app = express();

// ✅ Enable CORS for your frontend origin
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
    res.send("Server is Live now");
});

app.get("/api/data", (req, res) => {
    res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
