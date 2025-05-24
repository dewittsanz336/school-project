// Node.js example of reading JSON data and printing it

const fs = require('fs');

async function readJSONFile(filePath) {
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    console.error(`An error occurred while trying to read the file: ${error.message}`);
  }
}

// Usage
readJSONFile('path_to_your_json_file.json');
