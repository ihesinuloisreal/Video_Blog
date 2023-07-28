var express = require ('express');
var bodyParser = require ('body-parser');
var path = require ("path");
var port = 3000

var app = express();

app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('index')
});
app.get('/about', function(req, res){
    res.render('About');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/blog', function(req, res) {
    res.render('blog');
});
app.get('/faq', function(req, res) {
    res.render('faq');
});

app.listen(port);
console.log('Server started on port '+port);

module.exports = app;