var express = require('express');

var app     = express();
var server  = require('http').createServer(app);
var ejs = require('ejs');

var user=require("./user");

//设置模板为html
app.engine('.html', ejs.__express);
app.set('view engine','html');
app.set('views',__dirname+"/views");
app.set('view option',{layout:false});

app.use(express.static(__dirname+'/public'));

//设置起始页面
app.get('/',function(req,res,next){
	res.render('main.html',{user:user}); 
});
var oracle = require('oracle');

server.listen(3000);
