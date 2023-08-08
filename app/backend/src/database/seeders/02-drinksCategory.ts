import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'drinks_categories',
      [
        {
          "id": 1,
          "str_category": "Ordinary Drink"
        },
        {
          "id": 2,
          "str_category": "Cocktail"
        },
        {
          "id": 3,
          "str_category": "Shake"
        },
        {
          "id": 4,
          "str_category": "Other / Unknown"
        },
        {
          "id": 5,
          "str_category": "Cocoa"
        },
        {
          "id": 6,
          "str_category": "Shot"
        },
        {
          "id": 7,
          "str_category": "Coffee / Tea"
        },
        {
          "id": 8,
          "str_category": "Homemade Liqueur"
        },
        {
          "id": 9,
          "str_category": "Punch / Party Drink"
        },
        {
          "id": 10,
          "str_category": "Beer"
        },
        {
          "id": 11,
          "str_category": "Soft Drink"
        }
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks_categories', {});
  },
};