const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose
  .connect('mongodb://localhost:27017/farmStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the farmStore database!'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`ExpressMongoWarmup listening at http://localhost:${port}`);
});
