/**
 * Created by Oakley Hall on 12/7/16.
 */
'use strict';

const routes = {
  add: (err, server) => {
    // GET /account/organizations
    server.route({
      method: 'GET',
      path: '/organizations.json',
      config: {tags: ['api']},
      handler: require('./routehandlers').orgs(err, server)
    });
  }
};


module.exports = routes;