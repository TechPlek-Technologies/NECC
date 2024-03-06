// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {

    const attributes = {
        serial: { type: DataTypes.INTEGER, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true }
    }; 

    const options = {

    };

    const PageContent = sequelize.define('PageContent', attributes, options);

    

    return PageContent;
}
