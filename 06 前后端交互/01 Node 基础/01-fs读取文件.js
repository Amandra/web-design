const fs = require('fs');

fs.readFile('./demo.txt', 'utf-8', function (err, data) {
    console.log(err);
    console.log('---------');
    console.log(data);
});
