"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
const movie = db_1.sequelize.define("movies", {
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
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
});
exports.movie = movie;
