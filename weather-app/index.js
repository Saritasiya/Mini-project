const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'jaipur';
    const apiKey = 'key api';
    const url = `weather api`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
