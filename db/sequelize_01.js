const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const PizzaCategoryModel = require('../models/pizzaCategory');
const PizzaModel = require('../models/pizza');
const ReservationModel = require('../models/reservation');
const UserModel = require('../models/user');
const reservations = require('./mock-reservations');

const sequelize = new Sequelize('mamamia_pizz', 'root', 'Lechef47', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const PizzaCategory = PizzaCategoryModel(sequelize, DataTypes);
const Pizza = PizzaModel(sequelize, DataTypes);
const Reservation = ReservationModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

// Association entre les modèles 'PizzaCategory' et 'Pizza'
PizzaCategory.hasMany(Pizza, {
  foreignKey: {
    allowNull: false
  }
});
Pizza.belongsTo(PizzaCategory);

const initDb = async () => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('La connexion à la base de données "Mamamia pizz" a bien été établie.');

  //   // Synchronisation des modèles et création des données initiales
  //   await sequelize.sync({ force: true });

  //   // await Reservation.bulkCreate(reservations);

  //   const passwordHash = await bcrypt.hash('mdp', 10);
  //   await Promise.all([
  //     User.create({
  //       username: 'paul',
  //       password: passwordHash,
  //       roles: ['user', 'admin']
  //     }),
  //     User.create({
  //       username: 'pierre',
  //       password: passwordHash,
  //       roles: ['user']
  //     })
  //   ]);

  //   console.log('Initialisation de la base de données terminée.');
  // } catch (error) {
  //   console.error('Erreur lors de l\'initialisation de la base de données :', error);
  // }
};

sequelize.authenticate()
.then(() => console.log('Ok !'))
.catch(error => console.error(error));

module.exports = {
  sequelize,
  DataTypes,
  initDb
};
