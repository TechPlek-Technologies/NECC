// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {

    const attributes = {
        serial: { type: DataTypes.INTEGER, allowNull: true },
        designation: { type: DataTypes.STRING, allowNull: false },
        summary: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true }
    }; 

    const options = {

    };

    const Content = sequelize.define('Content', attributes, options);

    

    return Content;
}
