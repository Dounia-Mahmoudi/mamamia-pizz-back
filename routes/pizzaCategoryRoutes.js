const express = require('express');
const router = express.Router();
const pizzacategoryController = require('../controllers/pizzacategoryController');
const authController = require('../controllers/authController');
const Pizzacategory = require('../models/pizzaCategory');


// Route pour récupérer toutes les catégories de pizza
//router.get('/', authController.verifyToken, pizzacategoryController.getAllpizzacategory);

// Route pour créer une nouvelle catégorie de pizza
//router.post('/', authController.verifyToken, authController.isAdmin, pizzacategoryController.createpizzacategory);

module.exports = router;
