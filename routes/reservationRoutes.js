const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const reservationController = require('../controllers/reservationController');

router.use(authController.protect);

router.route('/')
  .get(authController.restrictTo('admin'), reservationController.getAllReservations)
  .post(authController.restrictTo('admin'), reservationController.createReservation);

router.route('/:id')
  .get(authController.restrictTo('admin'), reservationController.getReservation)
  .put(authController.restrictTo('admin'), reservationController.updateReservation)
  .delete(authController.restrictTo('admin'), reservationController.deleteReservation);

module.exports = router;
