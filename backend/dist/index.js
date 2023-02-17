"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// instantiate express app
var app = (0, express_1.default)();
// define server port
var PORT = process.env.PORT;
// default route
app.get('/', function (req, res) {
    res.send('Express TS server running');
});
// listen to requests
app.listen(PORT, function () {
    console.log('Express TS server running');
});
