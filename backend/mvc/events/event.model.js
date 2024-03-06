// Import necessary modules
const { DataTypes } = require('sequelize');

// Define the model function
module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        // Any specific options for this model
    };

    const Event = sequelize.define('Event', attributes, options);

    // Define association with Category model
    Event.belongsTo(sequelize.models.Category, {
        foreignKey: 'categoryID', // Name of the foreign key in the Event model
        allowNull: false, 
    });

    return Event;
}
