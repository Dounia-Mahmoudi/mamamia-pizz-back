// Définition du modèle Reservation
const Reservation = (sequelize, DataTypes) => {
  return sequelize.define('reservation', {
    id: {
      type: DataTypes.INTEGER, // Type de données : entier
      primaryKey: true, // Clé primaire
      autoIncrement: true // Auto-incrémentation
    },
    surname: {
      type: DataTypes.STRING, // Type de données : chaîne de caractères
      allowNull: false // Non autorisé d'être nul (obligatoire)
    },
    name: {
      type: DataTypes.STRING, // Type de données : chaîne de caractères
      allowNull: false // Non autorisé d'être nul (obligatoire)
    },
    phone: {
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
    hour_reservation: {
      type: DataTypes.TIME, // Type de données : heure
      allowNull: false // Non autorisé d'être nul (obligatoire)
    },
    number_of_people: {
      type: DataTypes.INTEGER, // Type de données : entier
      allowNull: false // Non autorisé d'être nul (obligatoire)
    },
    message: {
      type: DataTypes.TEXT, // Type de données : texte
      allowNull: true // Autorisé d'être nul (optionnel)
    }
  })
}

// Exportation du modèle Reservation
module.exports = Reservation;
