const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop Pro', price: 15000 },
    { id: 2, name: 'Smart Watch', price: 3500 },
    { id: 3, name: 'Headphones', price: 2200 },
  ]);
});

let cart = [];
app.post('/api/cart', (req, res) => {
  const product = req.body;
  cart.push(product);
  res.json({ success: true, cart });
}); 

app.listen(3000, () => console.log('Backend running on port 3400'));