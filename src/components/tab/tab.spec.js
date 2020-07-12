import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import Tab from './tab.vue';

describe('Tab', () => {
  let component;

  beforeEach(() => {
    component = mount(Tab, {
      propsData: {
        initialTab: 'tab-1',
        tabs: ['tab-1', 'tab-2'],
      },
    });
  });

  it('Displays initialTab by default', () => expect(component.find('#tab-1-tab').exists()).to.be.true);
  it('Displays correct tab body', async () => {
    const failsWithoutChangingTab = expect(component.find('#tab-2-tab').exists()).to.be.false;
    component.setData({
      activeTab: 'tab-2',
    });
    await component.vm.$nextTick();
    return expect(component.find('#tab-2-tab').exists()).to.be.true && failsWithoutChangingTab;
  });
});
