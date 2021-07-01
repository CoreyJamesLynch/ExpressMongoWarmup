const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const db = mongoose.connection;
const Product = require('./models/products');
const ejs = require('ejs');

app.set('view engine', 'ejs');

// GET products/new -> URL /products/new -> New product form POST
app.get('/products/new', (req, res) => {
  res.render('products/new');
});

// GET products/show -> URL /products/:id -> Show one product
app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});

// GET products/index -> URL /products -> Show all products
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
});

app.get('/', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
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

// POST redirect to URL /products
// GET products/edit -> URL /products/edit/:id -> Edit product form PATCH
// PATCH redirect to URL /products
// DELETE redirect to URL /products
