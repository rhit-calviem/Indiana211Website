const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.static('Public')); 

const dataFilePath = './data/realResources.json';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins (not recommended for production)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/data', async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).send('Internal Server Error');
  }
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


