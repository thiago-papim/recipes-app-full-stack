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
const MealsModel_1 = __importDefault(require("../models/MealsModel"));
class MealsService {
    constructor() {
        this._mealsModel = new MealsModel_1.default();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findAll();
            if (!result)
                return { status: 'NOT_FOUND', data: result };
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findById(id);
            if (result) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhuma receita encontrada' } };
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findByName(name);
            if (!result) {
                return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findByFirstLetter(letter) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findByFirstLetter(letter);
            if (!result || result.length === 0) {
                return { status: 'NOT_FOUND', data: { message: 'No recipes found with the specified first letter' } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findRandom();
            if (!result || result.length === 0) {
                return { status: 'NOT_FOUND', data: { message: 'No random recipes found' } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.getAllCategories();
            if (!result) {
                return { status: 'NOT_FOUND', data: { message: 'No categories found' } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    getAllAreas() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.getAllAreas();
            if (!result || result.length === 0) {
                return { status: 'NOT_FOUND', data: { message: 'No areas found' } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findByCategory(category);
            if (!result) {
                return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findByArea(area) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findByArea(area);
            if (!result) {
                return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    getAllNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.getAllNames();
            if (!result || result.length === 0) {
                return { status: 'NOT_FOUND', data: { message: 'No names found' } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findByIngredient(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._mealsModel.findByIngredient(ingredient);
            if (!result) {
                return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
            }
            return { status: 'SUCCESSFUL', data: result };
        });
    }
}
exports.default = MealsService;
