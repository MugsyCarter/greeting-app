var periodicTable = require('../lib/periodicTable');
var assert = require('assert');

describe('periodicTable.findElementByName', function(){
    it ('should return an object containing the properties of an element when you enter an Elements name', function(){
        var hydrogen = periodicTable.findElementByName('Hydrogen');
       assert.equal(hydrogen.symbol, 'H');     
    });
});

describe('periodicTable.findElementByNumber', function(){
    it ('should return an object containing the properties of an element when you enter an Elements atomic number', function(){
        var oxygen = periodicTable.findElementByNumber(8);
       assert.equal(oxygen.symbol, 'O');     
    });
});