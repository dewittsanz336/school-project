let express = require('express');
let app = express();

app.use(express.json());

// Define your routes here

app.listen(3000);
console.log('Server is running on http://localhost:3000');
