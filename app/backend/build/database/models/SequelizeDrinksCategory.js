"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class SequelizeDrinksCategory extends sequelize_1.Model {
}
SequelizeDrinksCategory.init({
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
}, {
    sequelize: _1.default,
    modelName: 'drinks_categories',
    timestamps: false,
    underscored: true
});
exports.default = SequelizeDrinksCategory;
