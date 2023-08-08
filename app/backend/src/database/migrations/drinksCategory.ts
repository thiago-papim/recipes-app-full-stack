import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDrinksCategory } from '../../interface/meals/drinks/IDrinksCategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrinksCategory>>('drinks_categories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      strCategory: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'str_category'
      },
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks_categories');
  },
}