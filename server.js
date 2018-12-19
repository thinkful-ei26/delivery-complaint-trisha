const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const BASE_URL = 'https://us-central1-delivery-form-api.cloudfunctions.net';

app.post(`${BASE_URL}/api/report`, bodyParser.json(), (req, res) => {
  //Validate the field types
  if(req.body) {
    console.log(req.body);
  }
  //Store message

  return res.sendStatus(200).end();
});

app.listen(8080);