// Importation des modules nécessaires
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

// Définition du modèle Reservation
const Reservation = sequelize.define('reservation', {
  id_reservation: {
    type: DataTypes.INTEGER, // Type de données : entier
    primaryKey: true, // Clé primaire
    autoIncrement: true // Auto-incrémentation
  },
  nom: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  prenom: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  telephone: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  email: {
    type: DataTypes.STRING, // Type de données : chaîne de caractères
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  date_reservation: {
    type: DataTypes.DATE, // Type de données : date
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  heure_reservation: {
    type: DataTypes.TIME, // Type de données : heure
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  nombre_personnes: {
    type: DataTypes.INTEGER, // Type de données : entier
    allowNull: false // Non autorisé d'être nul (obligatoire)
  },
  message: {
    type: DataTypes.TEXT, // Type de données : texte
    allowNull: true // Autorisé d'être nul (optionnel)
  }
});

// Exportation du modèle Reservation
module.exports = Reservation;
