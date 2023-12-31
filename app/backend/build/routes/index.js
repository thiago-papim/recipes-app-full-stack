"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drinks_routes_1 = __importDefault(require("./drinks.routes"));
const MealsRouter_1 = __importDefault(require("./MealsRouter"));
const router = (0, express_1.Router)();
router.use('/meals', MealsRouter_1.default);
router.use('/drinks', drinks_routes_1.default);
exports.default = router;
