// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(express.json());

// Import routes and controllers
const quotesRoutes = require('./routes/quotes');
const { handleUndefinedRoute } = require('./controller/error');

// Use the quotes routes
app.use('/quotes', quotesRoutes);

// Handle undefined routes
app.all('*', handleUndefinedRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
