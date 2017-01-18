/**
 * Created by Oakley Hall on 1/4/17.
 */

const expect = require('chai').expect;
const utils = require('../lib/utils');

describe('Utils tests.', () => {
  it( 'Age of now should be 0 ', () => {
    expect( utils.getAge( Date.now() ) ).to.equal( 0 );
  });
});