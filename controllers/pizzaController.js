const Pizza = require('../models/Pizza');

// Récupération de toutes les pizzas
const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.findAll();
    res.json(pizzas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Création d'une nouvelle pizza
const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body);
    res.status(201).json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Mise à jour d'une pizza existante
const updatePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedRows] = await Pizza.update(req.body, {
      where: { id: id },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Pizza non trouvée' });
    }

    res.json(updatedRows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Suppression d'une pizza
const deletePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Pizza.destroy({
      where: { id: id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Pizza non trouvée' });
    }

    res.json({ message: 'Pizza supprimée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = {
  getAllPizzas,
  createPizza,
  updatePizza,
  deletePizza
};
