var express = require('express');

var app = express();

var pub = __dirname;

app.use(express.static(pub));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/views', express.static(__dirname + '/views'))


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.get('/', function(req, res){
	res.render('index')
})

if(!module.parent) {
	var port = process.env.PORT || 4000;
	app.listen(port);
	console.log('express started on port 4000')
}