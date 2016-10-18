var goodMorning = require('./greeting');
var assert = require('assert');

describe('goodMorning', function(){
    it ('should return "Good morning, Dave."', function(){
        var greeting = goodMorning('Dave');
       assert.equal(greeting, "Good morning, Dave.");     
    });
});
