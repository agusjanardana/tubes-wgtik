var express = require('express');
var mainRoutes = require('./route/route');
var app = express();
const path = require("path")
var bodyParser = require('body-parser')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.use("/", mainRoutes)
app.use(express.static(path.join(__dirname, '/views')))

app.listen(8080, function () {
    console.log('Node.js listening on port ' + 8080)
})
