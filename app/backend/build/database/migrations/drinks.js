"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks', {
            idDrink: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
                field: 'id_drink'
            },
            strDrink: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_drink'
            },
            strDrinkAlternate: {
                allowNull: true,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_drink_alternate'
            },
            strTags: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_tags'
            },
            strVideo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_video'
            },
            strCategory: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_category'
            },
            strIBA: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_iba'
            },
            strAlcoholic: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_alcoholic'
            },
            strGlass: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_glass'
            },
            strInstructions: {
                allowNull: false,
                type: sequelize_1.DataTypes.TEXT,
                field: 'str_instructions'
            },
            strInstructionsES: {
                allowNull: false,
                type: sequelize_1.DataTypes.TEXT,
                field: 'str_instructions_es'
            },
            strInstructionsDE: {
                allowNull: true,
                type: sequelize_1.DataTypes.TEXT,
                field: 'str_instructions_de'
            },
            strInstructionsFR: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true,
                field: 'str_instructions_fr'
            },
            strInstructionsIT: {
                allowNull: false,
                type: sequelize_1.DataTypes.TEXT,
                field: 'str_instructions_it'
            },
            strDrinkThumb: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_drink_thumb'
            },
            strIngredient1: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient1'
            },
            strIngredient2: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient2'
            },
            strIngredient3: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient3'
            },
            strIngredient4: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient4'
            },
            strIngredient5: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient5'
            },
            strIngredient6: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient6'
            },
            strIngredient7: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient7'
            },
            strIngredient8: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient8'
            },
            strIngredient9: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient9'
            },
            strIngredient10: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient10'
            },
            strIngredient11: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient11'
            },
            strIngredient12: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient12'
            },
            strIngredient13: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient13'
            },
            strIngredient14: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient14'
            },
            strIngredient15: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_ingredient15'
            },
            strMeasure1: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure1'
            },
            strMeasure2: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure2'
            },
            strMeasure3: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure3'
            },
            strMeasure4: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure4'
            },
            strMeasure5: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure5'
            },
            strMeasure6: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure6'
            },
            strMeasure7: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure7'
            },
            strMeasure8: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure8'
            },
            strMeasure9: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure9'
            },
            strMeasure10: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure10'
            },
            strMeasure11: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure11'
            },
            strMeasure12: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure12'
            },
            strMeasure13: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure13'
            },
            strMeasure14: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure14'
            },
            strMeasure15: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_measure15'
            },
            strImageSource: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_image_source'
            },
            strImageAttribution: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                field: 'str_image_attribution'
            },
            strCreativeCommonsConfirmed: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_creative_commons_confirmed'
            },
            dateModified: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                field: 'date_modified'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('drinks');
    },
};
