const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user/:id', function (req, res) {
  const id = req.params.id;
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  if (id === 'admin') {
    res.send(user);
  } else {
    res.send('Access denied');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
