// Importation des modules nécessaires
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const pizzaCategoryModel = require('../models/pizzaCategory');
const pizza = require('../models/pizza');
const reservation = require('../models/reservation');

// Créer une instance Sequelize pour établir la connexion à la base de données
const sequelize = new Sequelize('mamamiapizz', 'root', 'Lechef47', {
 host: 'localhost',
 dialect: 'mariadb',
 logging: false
});

// Définition des modèles : 'PizzaCategory' 'pizza' 'reservation'
const PizzaCategory = pizzaCategoryModel(sequelize, DataTypes);
const Pizza = pizza(sequelize, DataTypes);
const Reservation = reservation(sequelize, DataTypes);

// Association entre les modèles 'PizzaCategory' et 'pizza'
PizzaCategory.hasMany(Pizza);
Pizza.belongsTo(PizzaCategory);

// Fonction pour initialiser la base de données
const initDb = async () => {
 try {
   // Synchronisation des modèles avec la base de données
   await sequelize.sync({ force: true });

   // Création des enregistrements de test pour les modèles 'PizzaCategory', 'pizza', 'reservation'
   await PizzaCategory.bulkCreate([
     { nom_pizzaCategory: 'Pizza base crème' },
     { nom_pizzaCategory: 'Pizza signature' },
     { nom_pizzaCategory: 'Pizza base tomate' }
   ]);

   await Pizza.bulkCreate([
     { name: 'Mamacita', pizzaCategoryId: 1 },
     // ... Autres enregistrements de pizzas ...
   ]);

   await Reservation.bulkCreate([
     { name: 'Client 1', email: 'client1@example.com', phone: '123456789', date: new Date(), time: '18:00:00', table_number: 1 },
     // ... Autres enregistrements de réservations ...
   ]);

   console.log('Base de données initialisée avec succès.');
 } catch (error) {
   console.error('Erreur lors de l\'initialisation de la base de données:', error);
 }
};

// Vérification de la connexion à la base de données
sequelize.authenticate()
 .then(() => {
   console.log('La connexion à la base de données "Mamamia Pizz" a bien été établie.');
   return initDb(); // Appel de la fonction pour initialiser la base de données
 })
 .catch(error => console.error(`Impossible de se connecter à la base de données: ${error}`));

// Exportation des instances, modèles et fonctions nécessaires
module.exports = {
 sequelize,
 PizzaCategory,
 Pizza,
 Reservation,
 initDb
};
