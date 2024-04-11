const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
app.use(bodyParser.json());

function _handleMessageCase(req) {
  if (req.message.text == undefined)
    return "/message/silent"

  if (req.message.text == "/start")
    return "/message/start"
  return "/message/smthdifferent"
}
function _handleInlineQuery(req) {
  return "/message/start"
}

function _handleCallback(req) {
  return `/callback/${req.callback_query.data}`
}

function chooseProperEndpoint(req) {
  if (req.message !== undefined)
    return _handleMessageCase(req);
  if (req.chosen_inline_result !== undefined)
    return _handleInlineQuery(req);
  return _handleCallback(req);

}

app.all('/', async (req, res) => {

  const new_method = "GET";
  const endpoint = chooseProperEndpoint(req);

  const response = await fetch(
    `http://bot:3000/${endpoint}`, {
    method: new_method,
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  });


  res.set('Content-Type', 'application/json');
  res.send(await response.json());



});

app.listen(8080);
