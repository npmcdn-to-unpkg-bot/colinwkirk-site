/**
This is a simple Node/Express microservice to take a POST call and
send an email via SES
**/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var aws = require('aws-sdk');
// load aws config
//using shared credentials on system so no need to set user/pass
aws.config.update({region: 'us-west-2'});

var ses = new aws.SES({apiVersion: '2010-12-01'});


/*set up cors stuff*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

/**just an example get route**/
app.get('/', function (req, res) {
  var data = {
    "bestAnimals": [
      "wombat",
      "corgi",
      "puffer fish",
      "owl",
      "crow",
      "cows of the cosmic variety"
    ]
  };

  res.json(data);
});

/** a simple route to take a json blob and send an email via AWS SES
Format of JSON is

{ data:
   { name: 'colin kirk',
     email: 'colinwkirk@ou.edu',
     site: 'http://www.colinwkirk.com',
     phone: '405-928-3147',
     subject: 'Professional Networking',
     carbon: true,
     message: 'This is only used as an example.' } }

*/
app.post("/api/contact/send-email", function (req, res){
    console.log("post request received");
    console.log(req.body);
    console.log(req.body['data']);
    //gotta get those cors headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // send to list
    var me = "colinwkirk@ou.edu"
    var to = ["cosmic.cow.ck@gmail.com"]
    // this must relate to a verified SES account
    var from = req.body['data']['email'];
    var subject = "Contact via website: " + req.body['data']['subject']

    var body = "Contact via website, details: \n" + req.body['data']['name'] + "\n"
    body += from + '\n'
    if (req.body['data']['site'] != "" && req.body['data']['site'] != null) {
        body += req.body['data']['site'] + "\n";
    }
    if (req.body['data']['phone'] != "" && req.body['data']['phone'] != null) {
        body += req.body['data']['phone'] + "\n";
    }
    body += "\n" + req.body['data']['message'];
    body += "\n\nContact " +
      (req.body['data']['carbon'] ? "requested " : "did not request ") +
      "a CC";
    var params = {
        Destination: { /* required */
            ToAddresses: to
        },
        Message: { /* required */
            Body: { /* required */
                Text: {
                    Data: body /* required*/
                }
            },
            Subject: { /* required */
                Data: subject /* required */

            }
        },
        //since i'm using free tier i need to make it from myself
        Source: me /* required */
    };
    ses.sendEmail(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    res.status(200).send("Sending email");
});

app.all('*', function(req, res) {
    console.log("Improper rest call made somehow");
    console.log(req.body);
    res.status(200).send("Incoming Message received");
});

/**kick off the server**/
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening on %s', port);
});
