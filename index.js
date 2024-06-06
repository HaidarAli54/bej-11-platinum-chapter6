const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'PONG!!' }); 
});

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`); 
});
