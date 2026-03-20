require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/get-data', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.SERVICE_B_URL}/data`);
        
        res.json({
            fromA: "Hello from Service A",
            fromB: response.data
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error communicating with Service B");
    }
});

app.listen(4000, () => {
    console.log('Service A running on port 4000');
});
