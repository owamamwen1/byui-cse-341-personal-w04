const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect.js');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
   .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes/index.js'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB listening on ${port}`);
  }
});