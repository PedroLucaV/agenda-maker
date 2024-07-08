import express from "express";
import router from "./router.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => {
    console.log("Server opened in PORT "+PORT);
})