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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const movie_1 = require("./movie");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
dotenv_1.default.config();
const port = 3000;
app.get('/', (req, res) => {
    res.send('ladidabudubadabi');
});
app.get('/catalog', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movie_1.movie.findAll();
        const count = yield movie_1.movie.count();
        res.status(201).json({ count, movies });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
});
