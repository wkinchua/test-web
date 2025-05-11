const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // parse JSON body

// Sample menu data
const menu = [
  { id: 1, name: "Burger", price: 8.99, description: "Beef burger with cheese" },
  { id: 2, name: "Pizza", price: 12.99, description: "Pepperoni pizza" },
  { id: 3, name: "Salad", price: 6.50, description: "Fresh greens" }
];

let orders = [];

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to the Restaurant API!");
});

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  const { customer, items } = req.body;
  const newOrder = {
    id: orders.length + 1,
    customer,
    items
  };
  orders.push(newOrder);
  res.json({ message: "Order received", order: newOrder });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
