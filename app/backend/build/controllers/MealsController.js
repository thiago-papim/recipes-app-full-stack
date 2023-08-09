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
const MealsService_1 = __importDefault(require("../services/MealsService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class MealsController {
    constructor() {
        this._mealsService = new MealsService_1.default();
    }
    findAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._mealsService.findAll();
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            res.status(200).json({ meals: response.data });
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this._mealsService.findById(Number(id));
            return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ meals: [response.data] });
        });
    }
    findByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ message: 'Invalid name parameter' });
            }
            const response = yield this._mealsService.findByName(q);
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json({ meals: response.data });
        });
    }
    findByFirstLetter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (!q || typeof q !== 'string' || q.length !== 1) {
                return res.status(400).json({ message: 'Invalid letter parameter' });
            }
            const response = yield this._mealsService.findByFirstLetter(q);
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json({ meals: response.data });
        });
    }
    findRandom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._mealsService.findRandom();
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json({ meals: response.data });
        });
    }
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._mealsService.getAllCategories();
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json(response.data);
        });
    }
    getAllAreas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._mealsService.getAllAreas();
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json(response.data);
        });
    }
    findByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ message: 'Invalid category parameter' });
            }
            const response = yield this._mealsService.findByCategory(q);
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json({ meals: response.data });
        });
    }
    findByArea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ message: 'Invalid area parameter' });
            }
            const response = yield this._mealsService.findByArea(q);
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json(response.data);
        });
    }
    getAllNames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._mealsService.getAllNames();
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json(response.data);
        });
    }
    findByIngredient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ message: 'Invalid ingredient parameter' });
            }
            const response = yield this._mealsService.findByIngredient(q);
            if (response.status !== 'SUCCESSFUL') {
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
            }
            return res.status(200).json({ meals: response.data });
        });
    }
}
exports.default = MealsController;
