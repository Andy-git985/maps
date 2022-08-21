const express = require('express');
const app = express();
const dotenv = require('dotenv');
const indexRoutes = require('./routes/index');

// Load config
dotenv.config({ path: './config/config.env' });

app.use(express.static('public'));

// Routes
app.use('/', indexRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
