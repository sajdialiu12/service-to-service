const express = require('express');
const axios = require('axios');

const app = express();

app.get('/get-data', async (req, res) => {
    try {
        const response = await axios.get('http://service-b:3001/data'); // <-- use service name
        res.json({
            fromA: "Hello from Service A",
            fromB: response.data
        });
    } catch (error) {
        console.error(error.message);  // log the actual error
        res.status(500).send("Error communicating with Service B");
    }
});

app.listen(4000, () => {
    console.log('Service A running on port 4000');
}); // <-- closing parenthesis and semicolon added
