const http = require('http');
const auth = require('basic-auth');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  var credentials = auth(req)

  if(!credentials || credentials.user !== 'adam' || credentials.pass !== '123') {
    console.log("here ?");
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.send('Access denied')
  } else {
    let token = jwt.sign(credentials, 'Secret Token Shhhs')
    res.json({user: 'adam', token: token})
  }
}
