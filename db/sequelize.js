const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mamamia_pizz', 'root', 'Lechef47', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const ReservationModel = require('../models/reservation')(sequelize, DataTypes);
const UserModel = require('../models/user')(sequelize, DataTypes);
const PizzaCategoryModel = require('../models/pizzaCategory')(sequelize, DataTypes);
const PizzaModel = require('../models/pizza')(sequelize, DataTypes); // Ajout de l'import du modèle 'pizza'

// Association entre les modèles 'PizzaCategory' et 'Pizza'
PizzaCategoryModel.hasMany(PizzaModel, {
    foreignKey: {
        allowNull: false
    }
});
PizzaModel.belongsTo(PizzaCategoryModel);

const initDb = () => {
    return sequelize.sync({ force: true })
        .then(() => {
          console.log("Init DB OK !");
            // const reservations = [
            //     {
            //         surname: 'John',
            //         name: 'Doe',
            //         telephone: '123456789',
            //         email: 'john@example.com',
            //         reservation_date: '2023-05-25',
            //         reservation_time: '18:00:00',
            //         numbre_people: 4,
            //         message: 'Sample message'
            //     },
            //     // Ajoutez d'autres réservations ici si nécessaire
            // ];

            // // Création des réservations
            // return ReservationModel.bulkCreate(reservations)
            //     .then(() => {
            //         // Création des utilisateurs
            //         return Promise.all([
            //             bcrypt.hash('mdp', 10).then((hash) => {
            //                 return UserModel.create({
            //                     username: 'paul',
            //                     password: hash,
            //                     roles: ['user', 'admin']
            //                 });
            //             }),
            //             bcrypt.hash('mdp', 10).then((hash) => {
            //                 return UserModel.create({
            //                     username: 'pierre',
            //                     password: hash,
            //                     roles: ['user']
            //                 });
            //             })
            //         ]);
            //     });
        })
        .catch(error => {
            console.error('Erreur lors de l\'initialisation de la base de données :', error);
        });
};

sequelize.authenticate()
    .then(() => {
        console.log('La connexion à la base de données "Mamamia pizz" a bien été établie.');
    })
    .catch(error => {
        console.error(`Impossible de se connecter à la base de données : ${error}`);
    });

module.exports = {
    sequelize,
    ReservationModel,
    initDb
};
