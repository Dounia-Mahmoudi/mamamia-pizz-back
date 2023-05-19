const Pizza = require('../models/Pizza'); // Importation du modèle Pizza

// Récupération de toutes les pizzas
const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.findAll(); // Récupère toutes les pizzas depuis la base de données
    res.json(pizzas); // Envoie les pizzas en tant que réponse JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Création d'une nouvelle pizza
const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body); // Crée une nouvelle pizza avec les données du corps de la requête
    res.status(201).json(pizza); // Envoie la pizza créée en tant que réponse JSON avec le statut 201 (Créé)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Mise à jour d'une pizza existante
const updatePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedRows] = await Pizza.update(req.body, {
      where: { id_pizza: id }, // Met à jour la pizza avec les données du corps de la requête en utilisant l'ID de la pizza spécifié dans les paramètres de la requête
      returning: true,
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Pizza non trouvée' }); // Si aucune pizza n'a été mise à jour, renvoie une réponse d'erreur avec le statut 404 (Non trouvé)
    }

    res.json(updatedRows[0]); // Envoie la pizza mise à jour en tant que réponse JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Suppression d'une pizza
const deletePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Pizza.destroy({
      where: { id_pizza: id }, // Supprime la pizza avec l'ID spécifié dans les paramètres de la requête
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Pizza non trouvée' }); // Si aucune pizza n'a été supprimée, renvoie une réponse d'erreur avec le statut 404 (Non trouvé)
    }

    res.json({ message: 'Pizza supprimée avec succès' }); // Envoie une réponse JSON avec un message de succès
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' }); // En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
  }
};

// Exportation des fonctions de contrôleur
module.exports = {
  getAllPizzas,
  createPizza,
  updatePizza,
  deletePizza,
};
