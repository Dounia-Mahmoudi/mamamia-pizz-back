const PizzaCategory = require('../models/pizzaCategory'); // Importation du modèle PizzaCategory

// Récupération de toutes les catégories de pizza
const getAllPizzaCategories = async (req, res) => {
  try {
    const pizzaCategories = await PizzaCategory.findAll(); // Récupère toutes les catégories de pizza depuis la base de données
    res.json(pizzaCategories); // Envoie les catégories de pizza en tant que réponse JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Création d'une nouvelle catégorie de pizza
const createPizzaCategory = async (req, res) => {
  try {
    const pizzaCategory = await PizzaCategory.create(req.body); // Crée une nouvelle catégorie de pizza avec les données du corps de la requête
    res.status(201).json(pizzaCategory); // Envoie la catégorie de pizza créée en tant que réponse JSON avec le statut 201 (Créé)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Exportation des fonctions de contrôleur
module.exports = {
  getAllPizzaCategories,
  createPizzaCategory,
};
