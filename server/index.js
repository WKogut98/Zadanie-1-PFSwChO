const keys = require('./keys');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const redis = require("redis");
const { listenerCount } = require('process');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: ()=>1000
});
const redisPublisher = redisClient.duplicate();


app.get("/", (req, res) => {
    res.send("Hi");
  });

app.get("/values/current", async(req, res) => {
    redisClient.hgetall("values", (err, values) =>
    {
        res.send(values);
    })
});

app.post("/values", async(req, res)=>
{
    const index=req.body.index;
    redisClient.hset("values", index, "Nic tu nie ma");
    redisPublisher.publish("insert", index);
    res.send({ working: true });
});

app.listen(5000, (err)=>
{
    console.log("Słucham");
})