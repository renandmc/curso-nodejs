const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando app
const app = express();

// iniciando db
mongoose.connect(
  'mongodb://192.168.99.100:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);