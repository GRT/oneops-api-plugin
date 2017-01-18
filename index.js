/**
 * Created by Oakley Hall on 12/7/16.
 */
'use strict';
const routes = require('./lib/routes');

const err = e => {
  console.error(e);
};

exports.register = (server, options, next) => {
  routes.add( err, server );
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
