"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// initialize express
const app = (0, express_1.default)();
/**
 * Setings
 */
app.set('port', process.env.PORT || 3000);
/**
 * Middleware
 */
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
/**
 * Routes
 */
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});
exports.default = app;
