const fs = require('fs');

// Read the JSON data from data.json
const rawData = fs.readFileSync('data.json');
const quotesData = JSON.parse(rawData);

// Function to select random quotes
function getRandomQuotes(req, res) {
  const numQuotes = parseInt(req.params.number, 10);
  if (isNaN(numQuotes) || numQuotes>=quotesData.length ) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  const randomQuotes = [];
  const dataCopy = [...quotesData];

  for (let i = 0; i < numQuotes; i++) {
    if (dataCopy.length === 0) {
      break;
    }
    const randomIndex = Math.floor(Math.random() * dataCopy.length);
    randomQuotes.push(dataCopy.splice(randomIndex, 1)[0]);
  }

  res.json(randomQuotes);
}

module.exports = { getRandomQuotes };