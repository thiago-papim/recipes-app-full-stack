"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks_categories', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            strCategory: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                field: 'str_category'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('drinks_categories');
    },
};
