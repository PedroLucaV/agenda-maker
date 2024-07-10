import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import 'dotenv/config';

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    database: 'mydb',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DATABASE_URL,
    port: process.env.DB_PORT
});

export default sequelize;