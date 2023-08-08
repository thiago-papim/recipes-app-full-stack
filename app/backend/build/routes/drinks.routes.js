"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinksController_1 = __importDefault(require("../controllers/DrinksController"));
const DrinksCategoryController_1 = __importDefault(require("../controllers/DrinksCategoryController"));
const drinksController = new DrinksController_1.default();
const drinksCategoryController = new DrinksCategoryController_1.default();
const router = (0, express_1.Router)();
router.get('/categories', (req, res) => drinksCategoryController.findAll(req, res));
router.get('/categories', (req, res) => drinksController.findAll(req, res));
router.get('/:id', (req, res) => drinksController.findById(req, res));
exports.default = router;
