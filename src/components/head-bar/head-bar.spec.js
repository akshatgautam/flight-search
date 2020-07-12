import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import HeadBar from './head-bar.vue';

describe('HeadBar', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(HeadBar);
  });

  describe('Has correct value', () => {
    it('Has h1', () => expect(component.contains('h1')).to.be.true);
    it('Shows correct app name', () => expect(component.find('h1').text()).to.equal('Flight Search App'));
  });
});
