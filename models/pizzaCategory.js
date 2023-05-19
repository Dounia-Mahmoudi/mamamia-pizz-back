// Importation des modules nécessaires
const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize'); // Importation de la configuration de la base de données

// Définition du modèle PizzaCategory
const PizzaCategory = sequelize.define('PizzaCategory', {
  id_pizzaCategory: {
    type: DataTypes.INTEGER, // Type de données : entier
    primaryKey: true, // Clé primaire
    autoIncrement: true // Auto-incrémentation
  },
  nom_pizzaCategory: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  }
});

// Exportation du modèle PizzaCategory
module.exports = PizzaCategory;
