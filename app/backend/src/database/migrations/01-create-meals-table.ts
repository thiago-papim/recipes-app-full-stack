import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMeals } from '../../Interfaces/meals/IMeals'

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMeals>>('meals', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strArea: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strInstructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      strMealThumb: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strTags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strYoutube: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient6: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient7: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient8: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient9: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient10: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient11: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient12: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient13: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient14: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient15: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strIngredient16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient17: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient18: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient19: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient20: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure6: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure7: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure8: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure9: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure10: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure11: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure12: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure13: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure14: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure15: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strMeasure16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure17: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure18: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure19: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure20: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strSource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};