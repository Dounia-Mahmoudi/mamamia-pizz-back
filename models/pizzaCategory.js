const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/sequelize'); // Importez l'instance sequelize à partir de sequelize.js

class PizzaCategory extends Model {}

PizzaCategory.init({
  id_pizzacategory: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pizzacategory_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // Utilisez l'instance sequelize importée
  modelName: 'pizzacategory',
  tableName: 'pizzacategory'
});

module.exports = PizzaCategory;
