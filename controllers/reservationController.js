let reservations = require('../mock-reservation')
const { ReservationModel, sequelize } = require('../db/sequelize')


const createReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create(req.body); // Crée une nouvelle réservation avec les données du corps de la requête
    res.status(201).json(newReservation); // Envoie la réservation créée en tant que réponse JSON avec le statut 201 (Créé)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Récupération de toutes les réservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll(); // Récupère toutes les réservations depuis la base de données
    res.json(reservations); // Envoie les réservations en tant que réponse JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Suppression d'une réservation
const deleteReservation = async (req, res) => {
  try {
    const { id_reservation } = req.params;
    const deletedReservation = await Reservation.destroy({
      where: {
        id_reservation: id_reservation
      }
    });

    if (deletedReservation) {
      res.json({ message: 'La réservation a été supprimée avec succès.' }); // Envoie une réponse JSON avec un message de succès si la réservation a été supprimée
    } else {
      res.status(404).json({ error: 'La réservation demandée est introuvable.' }); // Renvoie une réponse d'erreur avec le statut 404 (Non trouvé) si la réservation n'a pas été trouvée
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la réservation.' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Exportation des fonctions de contrôleur
module.exports = {
  createReservation,
  getAllReservations,
  deleteReservation
};
