import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import HeadBar from './head-bar.vue';

describe('HeadBar', () => {
  let component;

  beforeEach(() => {
    component = mount(HeadBar);
  });

  it('has div', () => expect(component.contains('div')).to.be.true);
});
