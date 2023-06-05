const PizzaCategory = require('../models/pizzaCategory');

// Récupération de toutes les catégories de pizza
exports.getAllPizzacategories = async (req, res) => {
  try {
    const pizzaCategories = await PizzaCategory.findAll();
    res.json(pizzaCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Création d'une nouvelle catégorie de pizza
exports.createPizzacategory = async (req, res) => {
  try {
    const pizzaCategory = await PizzaCategory.create(req.body);
    res.status(201).json(pizzaCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
