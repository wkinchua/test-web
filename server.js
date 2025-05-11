const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const menu = [
  { id: 1, name: "Burger", price: 8.99, description: "Beef burger with cheese" },
  { id: 2, name: "Pizza", price: 12.99, description: "12-inch pepperoni pizza" },
  { id: 3, name: "Salad", price: 6.50, description: "Fresh mixed greens" }
];

const orders = [
  { id: 1, customer: "Alice", item: "Pizza", quantity: 1 },
  { id: 2, customer: "Bob", item: "Burger", quantity: 2 }
];

app.get('/menu', (req, res) => res.json(menu));
app.get('/orders', (req, res) => res.json(orders));

app.listen(3000, () => console.log('Restaurant API running on port 3000'));
