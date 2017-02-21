var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("./webpack.config")

var app = new(require('express'))()

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.get('/',function(req,res) {
	res.sendFile(__dirname+'/index.html')
})
app.listen(8090, function(err) {
	if(err) {
		console.log(err)
	}else{
		console.log('app listen on port 8090...')
	}
})