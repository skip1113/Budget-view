const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();
const cheerio = require('cheerio');
const port = process.env.PORT || 3001;

app.get("/scrape", function (req, res) {
  axios.get("https://americasaves.org/").then(function (response) {
    let $ = cheerio.load(response.data);
  })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join('client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})
app.listen(port, () => console.log(`Listening on port ${port}`));