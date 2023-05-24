const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize');
const PizzaCategory = require('./pizzacategory');

class Pizza extends Model {}

Pizza.init({
  id_pizza: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pizza_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pizza_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pizza_category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'PizzaCategory',
      key: 'id_pizza_category'
    }
  }
}, {
  sequelize,
  modelName: 'Pizza',
  tableName: 'pizza' // Assurez-vous que le nom de la table est correct
});

module.exports = Pizza;
