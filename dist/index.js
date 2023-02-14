"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first Route of APP
app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to  my First API Restfull - APP Express + TS + Nodemoon + Jest + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    // Send Hello World
    res.send('Welcome to GET Route: !Hello!');
});
//Eecute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://loaclhost:${port}`);
});
//# sourceMappingURL=index.js.map