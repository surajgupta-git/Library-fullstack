const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const router = express.Router();
const path = require('path');

var app = express();
//var out="suraj";
var out=[];

app.use(express.static(__dirname + '/'));
router.use(bodyParser.urlencoded({ extended: true })); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);



function createindb()
{
    var con = mysql.createConnection({
        host: "localhost",
        user: "testuser",
        password: "Lion@king1",
        database: "library"
      });
      
      //THIS CALLBACK HIERARCHY IS IMPORTANT TO AVOID page refreshes
      con.connect(function(err) {
        if (err) throw err;
        con.query("select * from libraryinfo", function (err, result, fields) 
        {
          if (err) throw err;
          out[0]=result[0].NAME;
          out[1]=result[1].NAME;
          //you can use JSON.Stringify() to convert the sql query outputs into strings
          con.query("select * from libraryinfo", function (err, result, fields) 
          {
            if (err) throw err;
            out[2]=result[0].ID;
            out[3]=result[1].ID;

                router.post('/', function (req, res, next) {
                  console.log("func inside",out);
                  //res.render(__dirname + "/views/createaccount.html", {disp:outstr,disp2:name});
                  //res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
                  //res.send(outstr);
                  res.render('createoutput.ejs', {name1:out[0],name2:out[1],id1:out[2],id2:out[3]});
                });
          });

        });
      });
}

createindb();

module.exports = router;

