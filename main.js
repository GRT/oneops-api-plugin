/**
 * Created by Oakley Hall on 12/7/16.
 */
'use strict';

const plugin = {
  register: (server, options, next) => {
    next();
  }
};

plugin.register.attributes = {
  name: 'oneops-api',
  version: '1.0.0'
};

module.exports = plugin;