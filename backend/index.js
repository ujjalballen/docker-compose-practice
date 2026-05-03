import express from 'express';

const app = express();
const PORT = 5000;

// Basic middleware to parse JSON
app.use(express.json());

// A simple test route
app.get('/', (req, res) => {
    res.send('Server is running with ES Modules!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});
