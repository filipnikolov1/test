const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Lets go v2</h1>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
