const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Route pour récupérer toutes les réservations
router.get('/', reservationController.getAllReservations);

// Route pour créer une nouvelle réservation
router.post('/', reservationController.createReservation);

// Route pour supprimer une réservation
router.delete('/:id_reservation', reservationController.deleteReservation);

module.exports = router;
