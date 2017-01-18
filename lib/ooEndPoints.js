/**
 * Created by Oakley Hall on 1/11/17.
 */
'use strict';

module.exports = {
  getOrganizations: () => 'account/organizations.json',

  getAssemblies: org => org + '/assemblies.json',

  getEnvironments: (org, assem) =>
  org + '/assemblies/' +
  assem + '/transition/environments.json',

  getEnvironment: (org, assem, env) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' + env + '.json',

  getEnvironmentVariables: (org, assem, env) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' +
  env + '/variables.json',

  getPlatform: (org, assem, env, plat) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' +
  env + '/platforms/' +
  plat + '.json',

  getPlatforms: (org, assem, env) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' +
  env + '/platforms.json',

  getPlatformOps: (org, assem, env, plat) =>
  org + '/assemblies/' +
  assem + '/operations/environments/' +
  env + '/platforms/' +
  plat + '.json',

  getPlatformEdit: (org, assem, env, plat) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' +
  env + '/platforms/' +
  plat + '/' + 'edit.json',

  getPlatformVariables: (org, assem, env, plat) =>
  org + '/assemblies/' +
  assem + '/transition/environments/' +
  env + '/platforms/' +
  plat + '/variables.json',

  getVips: (org, assem, env, plat) =>
  org + '/organization/search.json?ns_path=/' +
  org + '/' +
  assem + '/' +
  env + '/bom/' +
  plat + '&package=bom&class_name=bom.Fqdn&attr_name=&attr_operator=eq&attr_value=',

  getComputes: (org, assem, env, plat) =>
  org + '/assemblies/' +
  assem + '/operations/environments/' +
  env + '/platforms/' +
  plat + '/components/compute/instances.json?instances_state=all'
};
