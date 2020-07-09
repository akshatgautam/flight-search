import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightList from './flight-list.vue';

describe('FlightList', () => {
  let component;

  beforeEach(() => {
    component = mount(FlightList);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
