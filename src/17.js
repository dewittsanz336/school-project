const fs = require('fs');
const readFileSync = require('read-write-stream');

try {
  const data = fs.readFileSync(__dirname + '/file.txt', { encoding: 'utf8' });
  console.log(data);
} catch (error) {
  console.error(error);
}
