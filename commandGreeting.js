commandGoodMorning= function(){
    var name = process.argv.pop();
    console.log('Good morning, '+ name);
    process.argv.push(name);
    return('Good morning, '+ name);
};

commandGoodMorning();

module.exports = commandGoodMorning;
