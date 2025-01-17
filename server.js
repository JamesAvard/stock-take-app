const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // If HTML files are in 'public' folder

// Serve skus.xlsx
app.get('/skus.xlsx', (req, res) => {
  res.sendFile(path.join(__dirname, 'skus.xlsx'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
