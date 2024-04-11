const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
app.use(bodyParser.json());


app.post('/', async (req, res) => {
  req.body.new_field = "new_data_to_field";
  const new_method = "POST";

  const response = await fetch(
    'http://bot:3000/start', {
    method: new_method,
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log("RESP");
  // console.log(resp);
  res.set('Content-Type', 'application/json');
  res.send(await response.json());


});

app.listen(8080);
