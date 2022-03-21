const express = require('express');
const port = 4242;
const server = express();

server.use(express.static(__dirname + '/public'));

// For using ejs template engine
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about', {
    cards: [...Array(50).keys()].map((id) => ({
      id,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, id!'
    }))
  });
});

server.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
