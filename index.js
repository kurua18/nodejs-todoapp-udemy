const express = require("express");
const app = express();
const PORT = 50001;
app.use(express.json());

app.listen(PORT, () => console.log("Server Started!"));

app.get("/", (req, res) => {
  res.send("learning udemy course.");
});

const customers = [
    { title: "alice", id: 1 },
    { title: "blice", id: 2 },
    { title: "clice", id: 3 },
    { title: "dlice", id: 4 },
    { title: "elice", id: 5 },
];

app.get("/api/customers", (req, res) => {
    res.send(customers );
});

app.post("/api/customers", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customer);
});

app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

