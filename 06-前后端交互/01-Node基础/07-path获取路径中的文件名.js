const path = require('path');

const filePath = '/a/b/c/d/index.html';

let fullName = path.basename(filePath);
console.log(fullName); // index.html

let nameWithoutExt = path.basename(filePath, '.html');
console.log(nameWithoutExt); // index
