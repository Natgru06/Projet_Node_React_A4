import express, { Request, Response } from 'express';
import cors from 'cors';
// Create Express application
const app = express();
const port = 3001;
app.use(cors());

let computerScienceKnowledge = [
    {
        topic: 'Algorithm',
        description: 'Fundamental algorithms for solving computational problems.',
        category: 'Computer Science Basics',
        difficulty: 3,
        prerequisite: 'Basic programming knowledge',
        tags: ['algorithm', 'sorting', 'searching'],
        source: 'Various textbooks'
    },
    {
        topic: 'Data Structure',
        description: 'Different data structures for organizing and storing data.',
        category: 'Computer Science Basics',
        difficulty: 2,
        prerequisite: 'Basic programming knowledge',
        tags: ['array', 'linked list', 'tree'],
        source: 'Various online resources'
    },
    {
        topic: 'Programming Language',
        description: 'Different programming languages and their features.',
        category: 'Programming',
        difficulty: 2,
        prerequisite: 'Basic programming knowledge',
        tags: ['Java', 'Python', 'JavaScript'],
        source: 'Official documentation and tutorials'
    },
    {
        topic: 'Computer Hardware',
        description: 'Understanding computer hardware components and architecture.',
        category: 'Computer Architecture',
        difficulty: 3,
        prerequisite: 'Basic computer knowledge',
        tags: ['CPU', 'RAM', 'Motherboard'],
        source: 'Hardware manuals and online resources'
    },
    {
        topic: 'Cybersecurity',
        description: 'Principles and practices for securing computer systems and networks.',
        category: 'Information Security',
        difficulty: 4,
        prerequisite: 'Basic understanding of computer networks',
        tags: ['security', 'encryption', 'firewalls'],
        source: 'Security textbooks and online courses'
    },
    {
        topic: 'Artificial Intelligence (AI)',
        description: 'Study of algorithms and techniques that enable computers to exhibit intelligent behavior.',
        category: 'Advanced Computer Science',
        difficulty: 5,
        prerequisite: 'Strong programming skills and understanding of algorithms',
        tags: ['machine learning', 'neural networks', 'natural language processing'],
        source: 'AI research papers and online courses'
    },
    {
        topic: 'Database Management Systems (DBMS)',
        description: 'Design and management of databases for efficient data storage and retrieval.',
        category: 'Database Management',
        difficulty: 3,
        prerequisite: 'Basic knowledge of data structures',
        tags: ['SQL', 'database design', 'query optimization'],
        source: 'Database textbooks and online resources'
    },
    {
        topic: 'Web Development',
        description: 'Creating dynamic and interactive websites using web technologies.',
        category: 'Software Development',
        difficulty: 2,
        prerequisite: 'Proficiency in HTML, CSS, and JavaScript',
        tags: ['HTML5', 'CSS3', 'React', 'Node.js'],
        source: 'Web development tutorials and documentation'
    },
    {
        topic: 'Operating Systems',
        description: 'Understanding the fundamental principles and components of operating systems.',
        category: 'Computer Science Basics',
        difficulty: 4,
        prerequisite: 'Basic knowledge of computer architecture',
        tags: ['kernel', 'file systems', 'process management'],
        source: 'Operating Systems textbooks and online courses'
    },
    {
        topic: 'Software Engineering',
        description: 'Methodologies and best practices for designing, developing, and maintaining software systems.',
        category: 'Software Development',
        difficulty: 3,
        prerequisite: 'Basic programming and problem-solving skills',
        tags: ['SDLC', 'version control', 'testing'],
        source: 'Software engineering books and online resources'
    },
    {
        topic: 'Computer Networks',
        description: 'Study of communication protocols, network architectures, and data transmission.',
        category: 'Networking',
        difficulty: 3,
        prerequisite: 'Basic understanding of computer hardware and software',
        tags: ['TCP/IP', 'routing', 'wireless networks'],
        source: 'Computer networks textbooks and online courses'
    },
    {
        topic: 'Algorithmic Complexity',
        description: 'Analysis of algorithmic complexity and efficiency.',
        category: 'Computer Science Basics',
        difficulty: 4,
        prerequisite: 'Understanding of basic algorithms',
        tags: ['time complexity', 'space complexity', 'big-O notation'],
        source: 'Algorithmic analysis textbooks and online resources'
    },
    {
        topic: 'Cloud Computing',
        description: 'Concepts and technologies related to cloud-based computing services.',
        category: 'Distributed Systems',
        difficulty: 3,
        prerequisite: 'Basic knowledge of networking and virtualization',
        tags: ['AWS', 'Azure', 'Google Cloud'],
        source: 'Cloud computing documentation and tutorials'
    },
    {
        topic: 'Mobile App Development',
        description: 'Creating applications for mobile devices using various development frameworks.',
        category: 'Software Development',
        difficulty: 3,
        prerequisite: 'Proficiency in a programming language',
        tags: ['iOS', 'Android', 'React Native'],
        source: 'Mobile development tutorials and documentation'
    }
];
app.use(express.json());
app.get('/api/computer-science', (req, res) => {
    res.json({ success: true, computerScienceKnowledge });
});

app.post('/api/computer-science/search', (req, res) => {
    const searchCriteria = req.body;
    console.log('Request Body:', searchCriteria);
    const searchResults = computerScienceKnowledge.filter(entry => {
        const matchesTopic = searchCriteria.topic ? entry.topic.toLowerCase().includes(searchCriteria.topic.toLowerCase()) : true;
        const matchesDifficulty = searchCriteria.difficulty ? entry.difficulty.toString() === searchCriteria.difficulty : true;
        const matchesTags = searchCriteria.tags ? searchCriteria.tags.every((tag: string) => entry.tags.includes(tag)) : true;
        return matchesTopic  && matchesDifficulty && matchesTags;
    });

    res.json({ success: true, results: searchResults });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});