const { ReservationModel, sequelize } = require('../db/sequelize');

const createReservation = async (req, res) => {
  try {
    const newReservation = await ReservationModel.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await ReservationModel.findAll();
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const deletedReservation = await ReservationModel.destroy({
      where: {
        id_reservation: id_reservation
      }
    });

    if (deletedReservation) {
      res.json({ message: 'La réservation a été supprimée avec succès.' });
    } else {
      res.status(404).json({ error: 'La réservation demandée est introuvable.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la réservation.' });
  }
};

module.exports = {
  createReservation,
  getAllReservations,
  deleteReservation
};
