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

    const Section = sequelize.define('Section', attributes, options);

    // Define association with Category model
    Section.belongsTo(sequelize.models.Pages, {
        foreignKey: 'pagesID', // Name of the foreign key in the Event model
        allowNull: false, 
    });

    return Section;
}
