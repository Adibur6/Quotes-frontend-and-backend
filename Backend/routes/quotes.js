// routes/quotes.js
const express = require('express');
const quotesRouter = express.Router();
const { getRandomQuotes } = require('../controller/quotes');

// Define a route to get random quotes
quotesRouter.get('/random/:number', getRandomQuotes);

module.exports = quotesRouter;
