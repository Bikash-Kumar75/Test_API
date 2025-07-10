import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is Live now");
})

app.get("/api/data", (req, res) => {
    res.send(data);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})

