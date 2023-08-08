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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('drinks_categories', [
            {
                "id": 1,
                "str_category": "Ordinary Drink"
            },
            {
                "id": 2,
                "str_category": "Cocktail"
            },
            {
                "id": 3,
                "str_category": "Shake"
            },
            {
                "id": 4,
                "str_category": "Other / Unknown"
            },
            {
                "id": 5,
                "str_category": "Cocoa"
            },
            {
                "id": 6,
                "str_category": "Shot"
            },
            {
                "id": 7,
                "str_category": "Coffee / Tea"
            },
            {
                "id": 8,
                "str_category": "Homemade Liqueur"
            },
            {
                "id": 9,
                "str_category": "Punch / Party Drink"
            },
            {
                "id": 10,
                "str_category": "Beer"
            },
            {
                "id": 11,
                "str_category": "Soft Drink"
            }
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('drinks_categories', {});
    }),
};
