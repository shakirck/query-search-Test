const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8000;
const db = require('./config/mongoose');
const middleware = require('./config/middleware');
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.urlencoded());
app.use(express.json());

app.use(morgan('common'));
app.use('/', require('./routes'));

app.use(middleware.errorHandler);
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error when starting the server', err);
  }
  console.log(`Server  is listening at http://localhost:${PORT}`);
});
