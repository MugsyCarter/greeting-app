const periodicTable = require('../lib/periodicTable');
const rl = require('readline');

  var i = rl.createInterface(process.stdin, process.stdout, null);
  prefix = 'Periodic Table> ';
  i.question(prefix + 'Enter a capitalized element name to see its information.', function(answer) {
  periodicTable.findElementByName(answer);
  i.close();
  process.stdin.destroy();
  });
  

