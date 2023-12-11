// Import required modules
import express, { Request, Response } from 'express';
import cors from 'cors';
// Create Express application
const app = express();
const port = 3000;
app.use(cors());

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
