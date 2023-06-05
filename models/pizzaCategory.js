module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PizzaCategory',
  {
    id_pizzacategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pizzacategory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)};
