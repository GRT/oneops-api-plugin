/**
 * Created by Oakley Hall on 12/7/16.
 */
const expect = require('chai').expect;
const routes = require('../lib/routes');

let checkConfig;
const server = { route: config => { checkConfig = config; } };

describe('Routes tests.', () => {
  it( 'should add an orgs route.', () => {
    routes.add( null, server );
    expect( checkConfig.method ).to.equal( 'GET' );
    expect( checkConfig.path ).to.equal( '/organizations.json' );
    expect( checkConfig.config ).to.deep.equal( {tags: ['api']} );
  });
});