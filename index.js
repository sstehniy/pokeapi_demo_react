const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), (err) => {
    if (err) console.log(err);
  });
});

app.listen(port, () => console.log(`server runs on port ${port}`));
