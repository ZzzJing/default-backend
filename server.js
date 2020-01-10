const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('content'));

app.all('/', (req, res) => {
  var xMethod = req.method;
  console.log("*********Method***************", xMethod);
  var xCode = req.headers['x-code'];
  console.log("*********X-Code***************", xCode);
  if (xCode == 500){
    const page500 = fs.readFileSync(__dirname + '/content/500.html', 'utf8');
    res.status(500).send(page500);  
  } else if (xCode == 403){
    const page403 = fs.readFileSync(__dirname + '/content/403.html', 'utf8');
    res.status(403).send(page403); 
  } else{
    const page404 = fs.readFileSync(__dirname + '/content/404.html', 'utf8');
    res.status(404).send(page404);
  }
});

app.get('/healthz', (req, res) => {
  res.send('Healthy!').end();
});

app.get('/es-upgrade', (req, res) => {
  const pageEsUpgrade = fs.readFileSync(__dirname + '/content/upgrade.html', 'utf8');
  res.status(200).send(pageEsUpgrade);
});

app.listen(8080, () => console.log('App listening on port 8080'));
