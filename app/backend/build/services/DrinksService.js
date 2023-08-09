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
const DrinksModels_1 = __importDefault(require("../models/DrinksModels"));
class DrinksService {
    constructor(drinksModel = new DrinksModels_1.default()) {
        this.drinksModel = drinksModel;
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findByName(name);
            if (result && result.length > 0) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado' } };
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findById(id);
            if (result) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado' } };
        });
    }
    findByLetter(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findByLetter(name);
            if (result && result.length > 0) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado' } };
        });
    }
    fyndByRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findByRandom();
            return { status: 'SUCCESSFUL', data: result };
        });
    }
    findByIngredient(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findByIngredient(ingredient);
            if (result && result.length > 0) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado' } };
        });
    }
    findByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.drinksModel.findByCategory(category);
            if (result && result.length > 0) {
                return { status: 'SUCCESSFUL', data: result };
            }
            return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado' } };
        });
    }
}
exports.default = DrinksService;
