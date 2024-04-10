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
const cors_1 = __importDefault(require("cors"));
const Movie_1 = require("./model/Movie");
const User_1 = require("./model/User");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
dotenv_1.default.config();
const port = 3000;
app.get('/', (req, res) => {
    res.send('ladidabudubadabi');
});
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "REQUEST BODY SIGNUP");
    try {
        const { username, emailReg, passwordReg, passwordConfirm } = req.body;
        const userExists = yield User_1.User.findOne({ where: { email: emailReg } });
        if (userExists) {
            return res.json({ message: "User already exists!" });
        }
        const user = User_1.User.create({
            name: username,
            email: emailReg,
            password: passwordReg
        });
        res
            .status(201)
            .json({ message: "User registered successfully", success: true, user });
    }
    catch (error) {
        console.error(error);
    }
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "REQUEST BODY");
    try {
        const { email, password } = req.body;
        const user = yield User_1.User.findOne({ where: { email: email } });
        const passwdDB = yield User_1.User.findOne({ where: { password: password } });
        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        // Perform password validation here
        if (!passwdDB) {
            return res.status(401).json({ message: "Incorrect password!" });
        }
        // If everything is correct, return success message
        res.status(200).json({ message: "User signed in successfully", success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
app.get('/catalog', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield Movie_1.movie.findAll();
        const count = yield Movie_1.movie.count();
        res.status(201).json({ count, movies });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
});
