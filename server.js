app.use(express.json()); // allow JSON body

let orders = [];

app.post('/orders', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    customer: req.body.customer,
    items: req.body.items
  };
  orders.push(newOrder);
  res.json({ message: "Order received", order: newOrder });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});
