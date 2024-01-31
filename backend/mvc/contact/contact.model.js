// Define the model function
module.exports = model;

function model(sequelize) {
    const { DataTypes } = require('sequelize');

    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: true },
        location: { type: DataTypes.STRING, allowNull: true },
        type: { type: DataTypes.ENUM('Corporate office', 'Regional office'), allowNull: false }
    };

    const options = {

    };

    const Contact = sequelize.define('Contact', attributes, options);

    // Additional associations can be defined here if needed

    return Contact;
}
