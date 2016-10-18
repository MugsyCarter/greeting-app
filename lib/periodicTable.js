var pt = require('periodic-table');

var findElementByName =function(name){
var regex = /^[A-Z]/g;
if (name.match(regex))
{
    var ele = pt.elements[name];
    console.log(ele);
    return ele;
}
else
{
    console.log('The first letter of your element name must be capitalized.');
}
};

var findElementByNumber =function(number){
  
if (typeof number === "number")
{
    var ele = pt.numbers[number];
    console.log(ele);
    return ele;
}
else
{
    console.log('The atomic number of your element must be a whole number.');
}
};


var x = findElementByName('Neon');
console.log(x.symbol);
findElementByNumber(8);


  var readline = require('linebyline'),
      rl = readline('./somefile.txt');
  rl.on('line', function(line, lineCount, byteCount) {
    // do something with the line of text 
  })
  .on('error', function(e) {
    // something went wrong 
  });




module.exports = {
    findElementByName,
    findElementByNumber
};






