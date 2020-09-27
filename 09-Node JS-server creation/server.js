const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html',
  });

  let url = request.url;
  if (url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } 
  else if (url === '/about') {
    fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } 
  else if (url === '/contact') {
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});
  server.listen(port, hostname, () => {
    console.log(`nodeJS server is started at http://${hostname}:${port}`);
  });

