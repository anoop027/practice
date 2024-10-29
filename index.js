const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('test codezzz!');
});

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

module.exports = { nodefunction: app };  // Export the function as nodefunction

