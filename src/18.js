// Node.js code example: Send an HTTP GET request to fetch data from a server.
const http = require('http');
const url = 'https://www.example.com';

http.get(url, (response) => {
  response.on('data', (chunk) => {
    console.log(`Response data: ${chunk}`);
  });

  response.on('end', () => {
    console.log('Request completed.');
  });
}).on('error', (err) => {
  console.error(`HTTP request error: ${err.message}`);
});
