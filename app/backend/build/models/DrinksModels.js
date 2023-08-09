"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeDrinks_1 = __importDefault(require("../database/models/SequelizeDrinks"));
const sequelize_1 = require("sequelize");
class DrinksModel {
    constructor() {
        this.model = SequelizeDrinks_1.default;
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const drink = yield this.model.findAll({
                where: {
                    strDrink: {
                        [sequelize_1.Op.like]: `%${name}%`
                    }
                }
            });
            return drink;
        });
    }
    ;
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const drink = yield this.model.findOne({ where: { idDrink: id } });
            return drink;
        });
    }
    findByLetter(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const drink = yield this.model.findAll({
                where: {
                    strDrink: {
                        [sequelize_1.Op.startsWith]: name[0]
                    }
                }
            });
            return drink;
        });
    }
    ;
    findByRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            const drinks = yield this.model.findAll();
            const randomNumber = Math.floor(Math.random() * drinks.length);
            return drinks[randomNumber];
        });
    }
    findByIngredient(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const drinks = yield this.model.findAll({
                where: {
                    [sequelize_1.Op.or]: Array.from({ length: 15 }, (_, i) => ({
                        [`strIngredient${i + 1}`]: ingredient
                    }))
                }
            });
            return drinks;
        });
    }
    findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const drinks = yield this.model.findAll({ where: { strCategory: category } });
            return drinks;
        });
    }
}
exports.default = DrinksModel;
