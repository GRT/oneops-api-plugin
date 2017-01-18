/**
 * Created by Oakley Hall on 1/13/17.
 */
const http = require('http');
const oo = require('../config.json').oneOps;


module.exports = (err, endpoint, callback) => {

  const options = {
    protocol:oo.protocol,
    hostname: oo.host,
    port: oo.port,
    path: oo.root,
    method: 'GET',
    headers: oo.headers
  };

  const req = http.request( options, res => {
    let body = '';
    res.on('data', chunk => { body += chunk; });
    res.on('end', () => { callback(body); });
  });

  req.on('error', (e) => { err(`problem with request: ${e.message}`); });

  req.end();
};
