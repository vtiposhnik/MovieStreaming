import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from './db'

const movie = sequelize.define("movies", {
    id: {   
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
})

export {movie};