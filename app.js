const express =require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(3000,function() {
    console.log("listen on port 3000")
});
//middleware
app.use(express.static(__dirname+'/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/',function(req,res){
    console.log(req.body.email);
    res.end('successful');
    addEmailToMailchimp(req.body.email)
})

function addEmailToMailchimp(email){
    var request = require("request");
    
    var options = { method: 'POST',
      url: 'https://us17.api.mailchimp.com/3.0/lists/62fc1e27f1/members',
      headers: 
       { 'postman-token': '3b81e547-0e2b-4869-3ae0-afc12a3cb7d3',
         'cache-control': 'no-cache',
         authorization: 'Basic YW55c3RyaW5nOmQyM2FmNjUzZTliZmRmODdkMjcwOGRhZjVkMmZlNDFiLXVzMTc=',
         'content-type': 'application/json' },
      body: 
       { email_address: email,
         status: 'subscribed' },
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    
}