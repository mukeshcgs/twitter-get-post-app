var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//  search twitter for all tweets containing the word 'banana' since July 11, 2011

var tweet = {
    status: 'hello world!'
};

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    //console.log(data);
}