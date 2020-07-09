import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import Tab from './tab.vue';

describe('Tab', () => {
  let component;

  beforeEach(() => {
    component = mount(Tab);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
