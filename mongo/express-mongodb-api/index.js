const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const { MongoClient } = require("mongodb")
const uri = "mongodb://Area-46:1234@localhost:27017";

app.post('/users/create', async (req, res) => {
    const customer = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').insertOne({
      id: parseInt(customer.id),
      tableNumber: parseInt(customer.tableNumber),
      orders: customer.orders
    });
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "Customer with ID = " + customer.id + " is created",
      "user": customer
    });
  })

  app.get('/users', async(req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const customer = await client.db('mydb').collection('users').find({}).toArray();
    await client.close();
    res.status(200).send(customer);
  })

  app.put('/users/update', async(req, res) => {
    const customer = req.body;
    const id = parseInt(customer.id);
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').updateOne({'id': id}, {"$set": {
      id: parseInt(customer.id),
      tableNumber: customer.tableNumber,
      orders: customer.orders
    }});
    await client.close();
    res.status(200).send({
      "status": "ok",
      "message": "Customer with ID = " + id + " is updated",
      "user": customer
    });
  })
