var commandGoodMorning = require('./commandGreeting');
var assert = require('assert');

describe('commandGoodMorning', function(){
    it ('should return "Good morning, Mugsy" when you type Mugsy in the command line', function(){
        var commandGreeting = commandGoodMorning();
       assert.equal(commandGreeting, "Good morning, Mugsy");     
    });
});

commandGoodMorning();