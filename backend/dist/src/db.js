"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const password = process.env.PASSWORD_DB;
const sequelize = new sequelize_1.Sequelize('movies', 'root', `${password}`, {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
const movies = sequelize.define("movies", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
});
const jdata = fs_1.default.readFileSync('../movies.json', 'utf8');
let arr = JSON.parse(jdata);
sequelize.sync().then(() => {
    console.log("Table created successfully!!!");
    movies.bulkCreate(arr);
}).catch((error) => {
    console.log(`Unable to create a table. [Error]: ${error}`);
});
