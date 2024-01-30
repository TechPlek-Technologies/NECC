// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        page: { type: DataTypes.STRING, allowNull: false },
        section: { type: DataTypes.STRING, allowNull: false },
        pdfFileName: { type: DataTypes.STRING, allowNull: false }, 
        pdfFilePath: { type: DataTypes.STRING, allowNull: false }, 
    }; 

    const options = {

    };

    const PdfUpload = sequelize.define('PdfUpload', attributes, options);

    PdfUpload.belongsTo(sequelize.models.Event, {
        foreignKey: 'eventID', // Name of the foreign key in the Event model
        allowNull: false,
    });

    return PdfUpload;
}
