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
            if (!result)
                return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
            return { status: 'SUCCESSFUL', data: result };
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
}
exports.default = MealsService;
