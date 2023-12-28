// Import required modules
import express, { Request, Response } from 'express';
import cors from 'cors';
// Create Express application
const app = express();
const port = 3000;
app.use(cors());

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}
// Define route for GET "/api/liveness"
const questions: Question[] = [
    {
        id: 1,
        question: 'What is the primary function of the CPU in a computer?',
        options: ['Storage', 'Processing', 'Display', 'Networking'],
        correctAnswer: 'Processing',
    },
    {
        id: 2,
        question: 'Which data structure follows the Last In, First Out (LIFO) principle?',
        options: ['Queue', 'Stack', 'Linked List', 'Array'],
        correctAnswer: 'Stack',
    },
    {
        id: 3,
        question: 'What does HTML stand for in web development?',
        options: ['HyperText Markup Language', 'High-Level Text Management Language', 'Hyper Transfer Markup Language', 'Hyperlink and Text Management Language'],
        correctAnswer: 'HyperText Markup Language',
    },
    {
        id: 4,
        question: 'Which programming language is known for its use in artificial intelligence and machine learning?',
        options: ['Java', 'Python', 'C++', 'Ruby'],
        correctAnswer: 'Python',
    },
    {
        id: 5,
        question: 'What is the purpose of an operating system?',
        options: ['Run applications', 'Manage hardware resources', 'Both A and B', 'None of the above'],
        correctAnswer: 'Both A and B',
    },
    {
        id: 6,
        question: 'In binary code, what does each digit represent?',
        options: ['0 or 1', '1, 2, or 3', 'A or B', 'None of the above'],
        correctAnswer: '0 or 1',
    },
    {
        id: 7,
        question: 'Which sorting algorithm has the best average-case time complexity?',
        options: ['Quick Sort', 'Bubble Sort', 'Insertion Sort', 'Selection Sort'],
        correctAnswer: 'Quick Sort',
    },
    {
        id: 8,
        question: 'What is the purpose of a database primary key?',
        options: ['Ensure data integrity', 'Improve query performance', 'Identify unique records', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        id: 9,
        question: 'What is the role of a compiler in programming?',
        options: ['Execute code', 'Translate source code to machine code', 'Debug code', 'Manage memory'],
        correctAnswer: 'Translate source code to machine code',
    },
    {
        id: 10,
        question: 'Which data structure is used to represent a hierarchical structure with parent-child relationships?',
        options: ['Graph', 'Tree', 'Heap', 'Queue'],
        correctAnswer: 'Tree',
    },
    {
        id: 11,
        question: 'What is the primary purpose of DNS (Domain Name System)?',
        options: ['Encrypt data transmission', 'Convert domain names to IP addresses', 'Manage user authentication', 'Control access to a network'],
        correctAnswer: 'Convert domain names to IP addresses',
    },
    {
        id: 12,
        question: 'Which programming paradigm emphasizes immutability and functional purity?',
        options: ['Object-Oriented Programming (OOP)', 'Procedural Programming', 'Functional Programming', 'Event-Driven Programming'],
        correctAnswer: 'Functional Programming',
    },
    {
        id: 13,
        question: 'What does the acronym SQL stand for?',
        options: ['Structured Question Language', 'Simple Query Language', 'Standardized Query Language', 'Sequential Question Language'],
        correctAnswer: 'Structured Query Language',
    },
    {
        id: 14,
        question: 'Which encryption algorithm is commonly used for secure communication over the internet?',
        options: ['DES', 'AES', 'RSA', 'MD5'],
        correctAnswer: 'AES',
    },
    {
        id: 15,
        question: 'What is the purpose of a cache in computing?',
        options: ['Increase storage capacity', 'Improve processing speed', 'Enhance network security', 'Both B and C'],
        correctAnswer: 'Both B and C',
    },
    {
        id: 16,
        question: 'Which programming language is often used for developing mobile applications?',
        options: ['Java', 'Swift', 'C#', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        id: 17,
        question: 'What is the significance of the Turing Test in artificial intelligence?',
        options: ['Evaluate a machine\'s ability to exhibit intelligent behavior', 'Measure processing speed', 'Assess network security', 'None of the above'],
        correctAnswer: 'Evaluate a machine\'s ability to exhibit intelligent behavior',
    },
    {
        id: 18,
        question: 'Which of the following is an example of a high-level programming language?',
        options: ['Assembly language', 'Machine code', 'Python', 'Both A and B'],
        correctAnswer: 'Python',
    },
    {
        id: 19,
        question: 'What is the purpose of the HTTP protocol in web development?',
        options: ['Handle email communication', 'Transfer files between devices', 'Facilitate communication between web browsers and servers', 'None of the above'],
        correctAnswer: 'Facilitate communication between web browsers and servers',
    },
    {
        id: 20,
        question: 'Which data structure is used to implement a stack?',
        options: ['Array', 'Linked List', 'Queue', 'Hash Table'],
        correctAnswer: 'Array',
    },
];
app.use(express.json());
app.get('/questions', (req, res) => {
    res.json(questions);
});

app.get('/questions/:id', (req: Request, res: Response) => {
    const questionId = parseInt(req.params.id, 10);
    const question = questions.find(q => q.id === questionId);

    if (!question) {
        return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
