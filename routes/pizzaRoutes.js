const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');
const authController = require('../controllers/authController');

// Route pour récupérer toutes les pizzas
router.get('/', pizzaController.getAllPizzas);

// Route pour récupérer une pizza spécifique par son ID
//router.get('/:id', pizzaController.getPizzaById);

module.exports = router;