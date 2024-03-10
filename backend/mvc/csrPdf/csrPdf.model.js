// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        pdfFileName: { type: DataTypes.STRING, allowNull: false }, 
    }; 

    const options = {

    };

    const CsrPdf = sequelize.define('CsrPdf', attributes, options);

    return CsrPdf;
}
