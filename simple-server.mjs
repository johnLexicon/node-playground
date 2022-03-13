import http from 'http';

const port = 4243;

const server = http.createServer((req, res) => {
  res.end('Simple server in ECMA Script module');
});


server.listen(port, () => {
  console.log('Server is running on port ' + port);
});