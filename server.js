
const http = require('http');

// here the server created
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write the response content
    res.write('<h1>Hi, please let me know what ill return </h1>');
    res.end();
});

// Specify the port to listen on
const port = 3000;

// server will begin listening after this command
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});