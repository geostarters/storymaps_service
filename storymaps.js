var express = require('express');
var cluster = require( 'cluster' );
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var municipis = require('./bboxmunicipis/municipis');
//var images = require('./contentDMAPI/getImages');
var storymaps = require('./routers/storymaps');
var fs = require('fs');
var os = require('os');
var logFile = fs.createWriteStream('./myLogFile.log', {flags: 'a'});
var _f = require('./config');

const numCPUs = os.cpus().length;

if( cluster.isMaster ) {
    for( var i = 0; i < numCPUs; i++ ) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log('worker '+ worker.process.pid +' died');
    });
    cluster.on( 'death', function( worker ) {
      console.log( 'Worker ' + worker.pid + ' died.' );
    });
}
else {
console.log('worker '+ cluster.worker.id +' call');

function allowCors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
    next();

}

var app = express();
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.use(bodyParser.json({limit: '2mb'}));
app.use(cookieParser());

app.use(allowCors);

app.use('/'+_f.pathMainWeb+'/', storymaps);
//app.use('/'+_f.pathMainWeb+'/municipis', municipis);
//app.use('/'+_f.pathMainWeb+'/cartotecaImages', images);
app.use('/'+_f.pathMainWeb+'/test/', express.static('test'));


app.listen(3003, function() {
    console.info("Servidor Iniciat");
});
//
app.use(function(req, res) {
    res.status(404).sendFile(__dirname+'/404.html');
});

app.use(function(err, req, res, next) {
    res.status(500).sendFile(__dirname+'/500.html');
});



//module.exports = app;
}
