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
router.get('/letter', (req, res) => drinksController.findByLetter(req, res));
router.get('/name', (req, res) => drinksController.findByName(req, res));
router.get('/random', (req, res) => drinksController.findByRandom(req, res));
router.get('/ingredient', (req, res) => drinksController.findByIngredient(req, res));
router.get('/category', (req, res) => drinksController.findByCategory(req, res));
router.get('/:id', (req, res) => drinksController.findById(req, res));
exports.default = router;
