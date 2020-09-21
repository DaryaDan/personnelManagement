var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  Product1 = require('./restapi/models/tasksModel'),
  bodyParser = require('body-parser');
  cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/workbase', { useMongoClient: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
var routes1 = require('./restapi/routes/tasksRoutes');
routes(app);
routes1(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Запуск на порту: ' + port);
