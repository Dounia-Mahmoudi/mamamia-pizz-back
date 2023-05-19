const express = require('express');
const router = express.Router();
const pizzaCategoryController = require('../controllers/pizzaCategoryController');

// Route pour récupérer toutes les catégories de pizza
router.get('/', pizzaCategoryController.getAllpizzaCategory);

// Route pour créer une nouvelle catégorie de pizza
router.post('/', pizzaCategoryController.createpizzaCategory);

module.exports = router;

