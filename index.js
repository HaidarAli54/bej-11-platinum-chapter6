const express = require('express');
const app = express();

require('dotenv').config();

// Mendapatkan port dari environment variable atau default ke 3000
const port = process.env.PORT || 3000;

// Mendefinisikan route untuk endpoint /ping
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'PONG!!' }); // Mengirim respons JSON dengan pesan 'PONG!!'
});

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`); // Menampilkan pesan di console bahwa server berjalan
});
