const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Verificar se a solicitação é para a raiz
  const filePath = req.url === '/' ? path.join(__dirname, 'public', 'index.html') : path.join(__dirname, 'public', req.url);
  const contentType = getContentType(filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Internal server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});



function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    default:
      return 'text/plain';
  }
}

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 8083;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
