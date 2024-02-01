// Define the model function
module.exports = model;

function model(sequelize) {
    const { DataTypes } = require('sequelize');

    const attributes = {
        city: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        addressLine1: { type: DataTypes.STRING, allowNull: false },
        addressLine2: { type: DataTypes.STRING },
        addressLine3: { type: DataTypes.STRING },
        pincode: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: true }, // Use JSON type instead of ARRAY
        tollfreeNo: { type: DataTypes.STRING, allowNull: true }, // Use JSON type instead of ARRAY
        email: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.ENUM('Corporate office', 'Regional office'), allowNull: false }
    };

    const options = {

    };

    const Address = sequelize.define('Address', attributes, options);

    // Additional associations can be defined here if needed

    return Address;
}
