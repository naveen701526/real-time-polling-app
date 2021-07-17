const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// set up your public folder
app.use(express.static(path.join(__dirname, 'public')));

// enable cors
app.use(cors());

// create a port number
const PORT = 3000;

// start the server

app.listen(PORT, () => console.log(`Server Started on PORT... ${PORT}`));
