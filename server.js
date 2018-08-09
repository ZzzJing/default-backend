const express = require('express');
const app = express();

app.use(express.static('content'));

app.all('/', (req, res) => {
  var xMethod = req.method;
  console.log("*********Method***************", xMethod);
  var xCode = req.headers['x-code'];
  console.log("*********X-Code***************", xCode);
  if (xCode == 500){
    res.status(500).sendFile(__dirname + '/content/500.html');
  }else{
    res.status(404).sendFile(__dirname + '/content/404.html');
  }
});

app.get('/healthz', (req, res) => {
  res.send('Healthy!').end();
});

app.listen(8080, () => console.log('App listening on port 8080'));
