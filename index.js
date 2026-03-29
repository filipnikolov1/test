const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Launchpad! UPDATED VERSION V4 FINAL? nope..., maybe? yes 🚀</h1>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
