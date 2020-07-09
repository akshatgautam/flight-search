import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightCard from './flight-card.vue';

describe('FlightCard', () => {
  let component;

  beforeEach(() => {
    component = mount(FlightCard);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
