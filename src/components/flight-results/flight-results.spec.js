import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightResults from './flight-results.vue';

describe('FlightResults', () => {
  let component;

  beforeEach(() => {
    component = mount(FlightResults);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
