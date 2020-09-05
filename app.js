const express = require('express');
const http = require('http');
const path = require('path');
var indexRouter = require('./routes/index');
var createaccountrouter= require('./routes/createaccount');
var createrouter= require('./routes/create');
var requestrouter= require('./routes/request');
var deleteaccountrouter= require('./routes/deleteaccount');
var updateaccountrouter= require('./routes/updateinfo');
var requestaccountrouter= require('./routes/requestaccountinfo');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(express.static(__dirname + 'public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/createaccount.html', createaccountrouter);
app.use('/deleteaccount.html', deleteaccountrouter);
app.use('/updateinfo.html', updateaccountrouter);
app.use('/requestaccountinfo.html', requestaccountrouter);
app.use('/create',createrouter);
app.use('/request',requestrouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//for sending static files
//app.use(express.static(__dirname + 'public'));
//app.get('/', (req, res) => {
  //  res.sendFile('./public/index.html', { root: __dirname });
//})

//for viewing the jade files 
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//FOR CLOSING THE CURRENT PORT PROCESS
//open cmd as admin
//C: \WINDOWS\system32 > netstat - ano | findstr : 3000
//cmd output: TCP    127.0.0.1: 3000         0.0.0.0: 0              LISTENING       21656
//PID is 21656
//C: \WINDOWS\system32 > taskkill / PID 21656 / F
//cmd output: SUCCESS: The process with PID 21656 has been terminated.