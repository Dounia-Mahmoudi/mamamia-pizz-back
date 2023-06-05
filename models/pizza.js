const pizzaCategory = require('./pizzaCategory');
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pizza',
  {
    id_pizza: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pizza_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pizza_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: pizzaCategory,
        key: 'id_pizza_category',
      },
    },
  }
)};

// PizzaModel.belongsTo(pizzaCategoryModel, {
//   foreignKey: 'pizza_category_id',
// });
