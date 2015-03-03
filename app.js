var app = require("express")();
var querystring = require('querystring');
//var OAuth   = require('oauth').OAuth;
var cors = require("cors");
var request = require('request');
var OAuth   = require('oauth-1.0a');

// blah start
app.use(cors());

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'TyZHKIeq9nlN7f5fnNMsgVfXX',
  consumer_secret: 'x2Ugi9oBdDDTVYgSLF4MxGkDu5SIRlmy0sECntq5nikqvGH1Fu',
  access_token_key: '1083453457-6NSDKI5dM09XIkeGKcL7gePLBiPYBzkNqkKd4RE',
  access_token_secret: 'HGHjeoB2TKMKpSYGl4vdGHIxIbiVqBk3po55TbVGurJJQ'
});

app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})


app.get("/*", function(req, res) {

    try{

      client.get(req.url, null, function(error, tweets, response){
        if (!error) 
        {
          res.send(tweets);
        }
        else{
          res.send("you have error dude");
        }
        console.log(error);
      });

    }
    catch (ex){

      res.send("go do it your self ! ;)");

    }

});

// blah end

// var oauth = OAuth({
//     consumer: {
//         public: 'kGh5v4RkGZWZURb1lxGwxh6LJ',
//         secret: 'hvjb1XIhNX9wosCzgm99At93u2jubMXq8A5VcG4bwaP9ZXGaDX'
//     },
//     signature_method: 'HMAC-SHA1'
// });

// var request_data = {
//     url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi',
//     method: 'GET'
// };

// var token = {
//     public: '299587768-eEBXYYeeYBrg5XEv5uVNvmNcXRU11TSaP7zddtsY',
//     secret: 'ngBAWJQtDphXWq1j2Phnn5xwiDtKo5HHkL2lIxifNmnUM'
// };


// var Client = function(oauth_config) {
//   this.oauthToken = oauth_config.token;
//   this.oauthTokenSecret = oauth_config.token_secret;
  
//   this.oauth = new OAuth(
//     null,
//     null,
//     oauth_config.consumer_key,
//     oauth_config.consumer_secret,
//     oauth_config.version || "1.0",
//     null,
//     'HMAC-SHA1'
//   );

//   return this;
// };

// var base_url = "http://api.yelp.com";

// Client.prototype.get = function(resource, params, callback) {

//   console.log(base_url + resource);
//   return this.oauth.get(
//     base_url + resource,
//     this.oauthToken, 
//     this.oauthTokenSecret, 
//     function(error, data, response) {
//       callback(error, data, response);
//     }
//   );
// }

// var authentication = {

// 	token: "qcd7k87kfnnmfAGUnRXyy7UJ078SviSl",
// 	token_secret: "zAhJFS3mXv2yYMzTm8dj3BYqK8I",
// 	consumer_key: "kw2F6nbsFEHamXZQ1fJuhQ",
// 	consumer_secret: "PwKdCWD67xBDjRlT2SpEYEnzuYs"

// };
// var yelpClient = new Client(authentication);

