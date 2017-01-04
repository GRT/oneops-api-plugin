/**
 * Created by Oakley Hall on 12/7/16.
 */
'use strict';

module.exports = function routes (server) {
  // GET /account/organizations
  server.route({
    method: 'GET',
    path: '/organizations.json',
    config: {tags: ['api']},
    handler: require('./routehandlers/organizations.js')(server)
  });
};