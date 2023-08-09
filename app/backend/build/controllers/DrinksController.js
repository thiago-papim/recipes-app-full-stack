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
const DrinksService_1 = __importDefault(require("../services/DrinksService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class DrinksController {
    constructor(drinksService = new DrinksService_1.default()) {
        this.drinksService = drinksService;
    }
    findByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (typeof q === 'string') {
                const response = yield this.drinksService.findByName(q);
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ drinks: response.data });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.drinksService.findById(Number(id));
            return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ drinks: [response.data] });
        });
    }
    findByLetter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (typeof q === 'string') {
                const response = yield this.drinksService.findByLetter(q);
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ drinks: response.data });
            }
        });
    }
    findByRandom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.drinksService.fyndByRandom();
            return res.status((0, mapStatusHTTP_1.default)(response.status)).json(response.data);
        });
    }
    findByIngredient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (typeof q === 'string') {
                const response = yield this.drinksService.findByIngredient(q);
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ drinks: response.data });
            }
        });
    }
    findByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q } = req.query;
            if (typeof q === 'string') {
                const response = yield this.drinksService.findByCategory(q);
                return res.status((0, mapStatusHTTP_1.default)(response.status)).json({ drinks: response.data });
            }
        });
    }
}
exports.default = DrinksController;
