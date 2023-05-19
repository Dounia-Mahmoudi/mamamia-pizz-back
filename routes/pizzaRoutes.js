const express = require('express');
const router = express.Router();
const pizzaCategoryController = require('../controllers/pizzaCategoryController');

// Route pour récupérer toutes les pizzas
router.get('/', pizzaCategoryController.getAllPizzas);

// Route pour créer une nouvelle pizza
router.post('/', pizzaCategoryController.createPizza);

// Route pour mettre à jour une pizza
router.put('/:id', pizzaCategoryController.updatePizza);

// Route pour supprimer une ou plusieurs pizzas
router.delete('/:id', pizzaCategoryController.deletePizza);

module.exports = router;
