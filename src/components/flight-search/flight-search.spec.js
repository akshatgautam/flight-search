import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightSearch from './flight-search.vue';

describe('FlightSearch', () => {
  let component;

  beforeEach(() => {
    component = mount(FlightSearch);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
