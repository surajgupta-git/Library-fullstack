const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const router = express.Router();

var app = express();
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
          //you can use JSON.Stringify() to convert the sql query outputs into strings

                router.post('/', function (req, res, next) {
                    con.query(`select * from libraryinfo where NAME=${JSON.stringify(req.body.fname)}`, function (err, result, fields) 
                    {
                        if (err) throw err;
                        //console.log(result);
                        out[0]=result[0].NAME;
                        out[1]=result[0].ID;

                            console.log("func inside",out);
                            res.render('requestoutput.ejs', {name1:out[0],id1:out[1]});
                            });
                    });
      });
}

createindb();

module.exports = router;

