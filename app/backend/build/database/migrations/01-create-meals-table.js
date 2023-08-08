"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('meals', {
            idMeal: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            strMeal: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strCategory: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strArea: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strInstructions: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            strMealThumb: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strTags: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strYoutube: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient1: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient2: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient3: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient4: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient5: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient6: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient7: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient8: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient9: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient10: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient11: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient12: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient13: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient14: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient15: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strIngredient16: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strIngredient17: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strIngredient18: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strIngredient19: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strIngredient20: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strMeasure1: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure2: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure3: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure4: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure5: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure6: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure7: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure8: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure9: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure10: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure11: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure12: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure13: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure14: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure15: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            strMeasure16: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strMeasure17: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strMeasure18: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strMeasure19: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strMeasure20: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            strSource: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('meals');
    },
};
