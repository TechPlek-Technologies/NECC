// Define the model function
module.exports = model;

function model(sequelize) {
    const { DataTypes } = require('sequelize');

    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        serial: { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {

    };

    const CsrCommittee = sequelize.define('CsrCommittee', attributes, options);

    // Additional associations can be defined here if needed

    return CsrCommittee;
}
