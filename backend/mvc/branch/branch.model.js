// Define the model function
module.exports = model;

function model(sequelize) {
  const { DataTypes } = require("sequelize");

  const attributes = {
    branch: { type: DataTypes.STRING, allowNull: false },
    personName: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    address1: { type: DataTypes.STRING, allowNull: false },
    address2: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true }, // Use JSON type instead of ARRAY
    mobile: { type: DataTypes.STRING, allowNull: true }, // Use JSON type instead of ARRAY
    email: { type: DataTypes.STRING, allowNull: true }, // Use JSON type instead of ARRAY
    branchCode: { type: DataTypes.STRING, allowNull: false },
    gtag: { type: DataTypes.TEXT, allowNull: false },
  };

  const options = {};

  const Branch = sequelize.define("Branch", attributes, options);

  // Additional associations can be defined here if needed

  return Branch;
}
