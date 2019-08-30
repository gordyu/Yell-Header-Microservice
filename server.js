const express = require('express');
const app = express();
const port = process.env.PORT || 9001;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`YellHeader is listening on port ${port}`);
});