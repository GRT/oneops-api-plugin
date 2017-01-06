/**
 * Created by Oakley Hall on 1/4/17.
 */

'use strict';

// route handler for:
// GET /account/organization
const utils = require('../utils');

module.exports = server => {
  return (request, reply) => {
    server.log('received GET /organizations request');
    reply('Heyooo!');
  };
};