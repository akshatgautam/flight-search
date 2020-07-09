import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import Datepicker from './date-picker.vue';

describe('Datepicker', () => {
  let component;

  beforeEach(() => {
    component = mount(Datepicker);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
