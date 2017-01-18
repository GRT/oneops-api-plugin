/**
 * Created by Oakley Hall on 1/4/17.
 */
'use strict';
const utils = require('./utils');
const endpoints = require('./ooEndPoints');
const get = require('./http-get');

module.exports = {
  orgs: (err, server) => {
    return (request, reply) => {
      server.log('received GET /organizations request');
      get(err, endpoints.getOrganizations(), reply);
    };
  }
};