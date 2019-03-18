// create a coin flip game
// take a guess between heads or tails
// create a event listener for my head or tails button
// create a function to flip the coin
// use math random to randomize the choice of heads/tails
// change image source

// const fs = require('fs');
// fs.appendFile('coin-flip.html', 'Hello content!', function (err) { if (err) throw err;
// console.log('Saved!');
// });

const http = require('http');
const fs = require('fs');

fs.appendFile('coin-flip.html', 'Hello content!', function (err) {
  if (err) throw err;
console.log('Saved!');
});


http.createServer(function (req, res) {
fs.readFile('coin-flip.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
});
}).listen(8000);
