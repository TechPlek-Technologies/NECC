// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {

    const attributes = {
        position: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true }
    }; 

    const options = {

    };

    const CiDirectors = sequelize.define('CiDirectors', attributes, options);

    

    return CiDirectors;
}
