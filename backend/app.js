var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Main = require('./restapi/models/mainModel'),
    Description = require('./restapi/models/descriptionModel'),
    Tasks = require('./restapi/models/tasksModel'),
    Correspond = require('./restapi/models/correspondModel'),
    News = require('./restapi/models/newsModel'),
    bodyParser = require('body-parser');
cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://DaryaDan:G7qRSG%40!87MuhA7@cluster0-shard-00-00.nua7c.mongodb.net:27017,cluster0-shard-00-01.nua7c.mongodb.net:27017,cluster0-shard-00-02.nua7c.mongodb.net:27017/workbase?ssl=true&replicaSet=atlas-twvmn3-shard-0&authSource=admin&retryWrites=true&w=majority', { useMongoClient: true });
// mongoose.connect('mongodb://localhost/workbase', { useMongoClient: true });
//G7qRSG@!87MuhA7

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes1 = require('./restapi/routes/mainRoutes');
var routes2 = require('./restapi/routes/descriptionRoutes');
var routes3 = require('./restapi/routes/tasksRoutes');
var routes4 = require('./restapi/routes/correspondRoutes');
var routes5 = require('./restapi/routes/newsRoutes');
routes1(app);
routes2(app);
routes3(app);
routes4(app);
routes5(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Запуск на порту: ' + port);