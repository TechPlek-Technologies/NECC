// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        // You can add more attributes as needed
    };

    const options = {
        // Any specific options for this model
    };

    return sequelize.define('Category', attributes, options);
}
