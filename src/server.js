// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Endpoint to get MOCK_DATA
app.get('/api/mock-data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('MOCK_DATA.json', 'utf-8'));
  res.json(data);
});

// Endpoint to update MOCK_DATA
app.post('/api/update-mock-data', (req, res) => {
  const newData = req.body;
  fs.writeFileSync('MOCK_DATA.json', JSON.stringify(newData));
  res.json({ message: 'Data updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
