const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use( cors());
app.use( express.static(__dirname + '/dist'));

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

const forceSSL = function(){
  return function(req, res, next){
    if(req.headers['x-forwarded-proto'] !== 'https'){
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

app.use(forceSSL());
