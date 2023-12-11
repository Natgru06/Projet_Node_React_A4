"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Create Express application
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
// Define route for GET "/api/liveness"
const LearningPackage = [
    { id: 1, description: "Learn Typescript", priority: 1 },
    { id: 2, description: "Learn NodeJs", priority: 1 },
    { id: 3, description: "Learn Html", priority: 1 },
    { id: 4, description: "Learn Angular", priority: 1 }
];
app.get('/api/learning-package', (req, res) => {
    res.json(LearningPackage);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
