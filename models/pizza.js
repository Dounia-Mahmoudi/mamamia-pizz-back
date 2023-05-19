// Importation des modules nécessaires
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const pizzaCategory = require('./pizzaCategory'); // Importation du modèle pizzaCategory

// Définition du modèle Pizza
const Pizza = sequelize.define('pizza', {
  id_pizza: {
    type: DataTypes.INTEGER, // Type de données : entier
    primaryKey: true, // Clé primaire
    autoIncrement: true // Auto-incrémentation
  },
  nom_pizza: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  description_pizza: {
    type: DataTypes.TEXT, // Type de données : texte
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  prix_pizza: {
    type: DataTypes.FLOAT, // Type de données : flottant
    allowNull: false // Non autorisé d'être nul (obligatoire)
  }
});

// Relation avec le modèle CategoriePizza
Pizza.belongsTo(pizzaCategory, { foreignKey: 'id_pizzaCategory' });

// Exportation du modèle Pizza
module.exports = Pizza;
