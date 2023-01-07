"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// a simple custom Express server with TypeScript
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var PORT = 3001 || process.env.PORT;
app.get("/", function (req, res) {
    res.send("Express and TypeScript is running!!!");
});
app.listen(PORT, function () {
    console.log("Express is listening on port ".concat(PORT));
});
