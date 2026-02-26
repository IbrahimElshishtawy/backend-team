const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

const PORT = 3400;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop Pro', price: 15000, image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Smart Watch', price: 3500, image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Wireless Headphones', price: 2200, image: 'https://via.placeholder.com/300x200' }
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));