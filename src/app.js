'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const hpp = require('hpp');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// setting up the cors middleware to implement Search Results Cross-Origin Resource Sharing (CORS)
app.use(cors());
// setting up the helmet middleware to add header security features
app.use(helmet());
// setting up the xxs-clean middleware to prevent XSS attacks
app.use(hpp());
// Morgan
app.use(morgan('dev'));
// Routes
const testRoutes = require('./routes/test.route');

app.use('/api', testRoutes);

// For invalid routes
app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`)
    next(err)
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});