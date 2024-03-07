import { Sequelize, DataTypes } from 'sequelize'
import dotenv from 'dotenv'
import { updateMovies } from './update';
dotenv.config()
const password = process.env.PASSWORD_DB

const sequelize = new Sequelize('movies', 'lewpi', `${password}`, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

export {sequelize}
