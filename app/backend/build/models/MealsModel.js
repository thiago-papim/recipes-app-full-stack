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
const SequelizeMealsModel_1 = __importDefault(require("../database/models/SequelizeMealsModel"));
const sequelize_1 = require("sequelize");
class MealsModel {
    constructor() {
        this.model = SequelizeMealsModel_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll();
            return dbData;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const meal = yield this.model.findOne({ where: { idMeal: id } });
            return meal;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                where: {
                    strMeal: name,
                },
            });
            return !dbData ? null : dbData;
        });
    }
    findByFirstLetter(letter) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                where: {
                    strMeal: {
                        [sequelize_1.Op.like]: `${letter}%`,
                    },
                },
            });
            return dbData;
        });
    }
    findRandom() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                order: (_a = this.model.sequelize) === null || _a === void 0 ? void 0 : _a.random(),
            });
            return dbData;
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                attributes: ['strCategory'],
                raw: true,
            });
            const uniqueCategories = new Set();
            dbData.forEach(item => {
                uniqueCategories.add(item.strCategory);
            });
            const result = Array.from(uniqueCategories).map(category => ({
                strCategory: category,
            }));
            return { meals: result };
        });
    }
    getAllAreas() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                attributes: ['strArea'],
                raw: true,
            });
            return dbData.map(item => item.strArea);
        });
    }
    findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                where: {
                    strCategory: category,
                },
                raw: true,
            });
            return dbData;
        });
    }
    findByArea(area) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                where: {
                    strArea: area,
                },
                raw: true,
            });
            return dbData;
        });
    }
    getAllNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbData = yield this.model.findAll({
                attributes: ['strMeal'],
                raw: true,
            });
            return dbData.map(item => item.strMeal);
        });
    }
    findByIngredient(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const meals = yield this.model.findAll({
                where: {
                    [sequelize_1.Op.or]: Array.from({ length: 15 }, (_, i) => ({
                        [`strIngredient${i + 1}`]: ingredient
                    }))
                },
                raw: true,
            });
            return meals;
        });
    }
}
exports.default = MealsModel;
