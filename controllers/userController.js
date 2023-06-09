const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { UserModel } = require('../db/sequelize');

exports.findAllUsers = (req, res) => {
  UserModel.scope('withoutPassword')
    .findAll()
    .then((users) => {
      const msg = 'La liste des utilisateurs a bien été récupérée en base de données.';
      res.json({ message: msg, data: users });
    })
    .catch((error) => {
      const msg = 'Une erreur est survenue.';
      res.status(500).json({ message: msg });
    });
};
