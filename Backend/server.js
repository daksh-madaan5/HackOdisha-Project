const express = require('express')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const cors= require('cors')

const app = express()
const port = 3000
app.use(cors())
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passecure';
app.use(bodyparser.json())

client.connect();

dotenv.config()

//Get all details

app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('details');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

//save details

app.post('/', async (req, res) => {
    const detail=req.body
    const db = client.db(dbName);
    const collection = db.collection('details');
    const findResult = await collection.insertOne(detail);
    res.send({success:true,result:findResult})
})

//delete a detail

app.delete('/', async (req, res) => {
    const detail=req.body
    const db = client.db(dbName);
    const collection = db.collection('details');
    const findResult = await collection.deleteOne(detail);
    res.send({success:true,result:findResult})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
