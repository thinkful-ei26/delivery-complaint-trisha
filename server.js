const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const URL = 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';

app.post(URL, bodyParser.json(), (req, res) => {
  //Validate the field types
  if(req.body) {
    console.log(req.body);
  }
  //Store message

  return res.sendStatus(200).end();
});

app.listen(8080);