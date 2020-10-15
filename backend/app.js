var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  Product1 = require('./restapi/models/tasksModel'),
  bodyParser = require('body-parser');
  cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://DaryaDan:G7qRSG%40!87MuhA7@cluster0-shard-00-00.nua7c.mongodb.net:27017,cluster0-shard-00-01.nua7c.mongodb.net:27017,cluster0-shard-00-02.nua7c.mongodb.net:27017/workbase?ssl=true&replicaSet=atlas-twvmn3-shard-0&authSource=admin&retryWrites=true&w=majority', { useMongoClient: true });
// mongoose.connect('mongodb://localhost/workbase', { useMongoClient: true });
//G7qRSG@!87MuhA7

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
