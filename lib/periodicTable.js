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

module.exports = {
    findElementByName,
    findElementByNumber
};






