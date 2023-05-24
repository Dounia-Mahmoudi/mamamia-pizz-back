const Pizzacategory = require('../models/pizzacategory');

// Récupération de toutes les catégories de pizza
exports.getAllpizzacategory = async (req, res) => {
  try {
    const pizzaCategories = await Pizzacategory.findAll();
    res.json(pizzaCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Création d'une nouvelle catégorie de pizza
exports.createpizzacategory = async (req, res) => {
  try {
    const pizzaCategory = await Pizzacategory.create(req.body);
    res.status(201).json(pizzaCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Exportation des fonctions de contrôleur
module.exports = {
  getAllPizzacategories,
  createPizzacategory,
};
