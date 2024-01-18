// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        pdfFile: { type: DataTypes.STRING, allowNull: false },
        section: { type: DataTypes.STRING, allowNull: false },
        categoryId: { type: DataTypes.INTEGER, allowNull: false },
        // You can add more attributes as needed
    };

    const options = {
        // Any specific options for this model
    };

    const Event = sequelize.define('Event', attributes, options);

    // Define association with Category model
    Event.belongsTo(sequelize.models.Category, {
        foreignKey: 'categoryId', // Name of the foreign key in the Event model
        allowNull: false,
    });

    return Event;
}
