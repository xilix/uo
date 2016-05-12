'use strict';

const uo = require('lib/uo');
const should = require('should');

describe('uo', () => {
  let obj = {
    name: 'Jhon',
    lastname: 'Smith',
    job: {
      name: 'butcher',
      salary: 20000,
      company: {
        name: 'meats && cows inc.',
        revenue: 30000000
      },
      perks: {
        insurance: [
          'health care'
        ]
      }
    }
  };
  it('get the property of an object', () => {
    uo(obj, 'name').should.be.equal('Jhon');
    uo(obj, 'lastname').should.be.equal('Smith');
  });
  it('return undefined if the property doesn\'t exists', () => {
    should.not.exists(uo(obj, 'age'));
    should.not.exists(uo(obj, 'revenue'));
  });
  it('return the nested property of an object', () => {
    uo(obj, 'job', 'name').should.be.equal('butcher');
    uo(obj, 'job', 'company', 'name').should.be.equal('meats && cows inc.');
  });
  it('return undefined if some nested key does not exists', () => {
    should.not.exists(uo(obj, 'job', 'cars'));
  })
  it('return undefined if some nested key does not exists', () => {
    should.not.exists(uo(obj, 'job', 'cars'));
  })
});
