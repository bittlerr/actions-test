require("dotenv").config();

const express = require("express");
const { createClient } = require("redis");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  console.log(process.env);
});

(async () => {
  console.log(process.env.REDIS_HOST);

  const client = createClient({
    url: process.env.REDIS_HOST,
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  const pong = await client.ping();

  console.log(pong);

  await client.disconnect();
})();
