import express, { json } from "express";
import sequelize from './config/dbconfig.js';
import bodyParser from 'body-parser';
import userRoutes from "./routes/usersRoutes.js";
import appoitmentRoutes from './routes/appoitmentsRoutes.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use('/appointments', appoitmentRoutes)

sequelize.authenticate().then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});