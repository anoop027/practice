import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Add this part to listen on the port specified by the environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;

