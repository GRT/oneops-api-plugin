/**
 * Created by Oakley Hall on 12/7/16.
 */
'use strict';
const routes = require('./lib/routes');

exports.register = (server, options, next) => {
  routes.add(server);
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
