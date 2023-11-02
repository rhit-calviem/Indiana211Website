const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.static('Public')); 

const dataFilePath = './data/realResources.json';

app.get('/Main', async (req, res) => {
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
