const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    res.json({ message: "Hello from Service B" });
});

app.listen(3001, () => {
    console.log('Service B running on port 3001');
});
