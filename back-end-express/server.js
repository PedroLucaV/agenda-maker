import express from "express";
import sequelize from './controller/dbconfig.js';
import router from "./router.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(router);

sequelize.authenticate().then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});