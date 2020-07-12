import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightSearch from './flight-search.vue';

describe('FlightSearch', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(FlightSearch, {
      propsData: {
        returnTrip: false,
      },
    });
  });

  describe('Computed properties', () => {
    it('Gives destination list with origin removed', () => {
      component.setData({
        selectedOrigin: 'PNQ',
      });
      expect(component.vm.destinationList).to.deep.equal([
        {
          label: 'Delhi - (DEL)',
          value: 'DEL',
        },
        {
          label: 'Bombay - (BOM)',
          value: 'BOM',
        },
        {
          label: 'Bengaluru - (BLR)',
          value: 'BLR',
        },
      ]);
    });

    it('Enables search only if origin, destination and departure date is selected for one way', () => {
      const failsWithoutOptions = expect(component.vm.enableSearch).to.be.false;
      component.setData({
        selectedOrigin: 'PNQ',
        selectedDestination: 'DEL',
        departureDate: '12/07/2020',
      });

      return expect(component.vm.enableSearch).to.be.true && failsWithoutOptions;
    });

    it('Enables search only if origin, destination departure and return date is selected for round trip', () => {
      const failsWithoutOptions = expect(component.vm.enableSearch).to.be.false;
      component.setProps({
        returnTrip: true,
      });
      component.setData({
        selectedOrigin: 'PNQ',
        selectedDestination: 'DEL',
        departureDate: '12/07/2020',
        returnDate: '13/07/2020',
      });

      return expect(component.vm.enableSearch).to.be.true && failsWithoutOptions;
    });

    it('Return correct name code map', () => expect(component.vm.nameCodeMap).to.deep.equal({
      DEL: 'Delhi - (DEL)',
      BOM: 'Bombay - (BOM)',
      BLR: 'Bengaluru - (BLR)',
      PNQ: 'Pune - (PNQ)',
    }));
  });

  describe('Input value updates', () => {
    it('Updates origin city', () => {
      expect(component.vm.selectedOrigin).to.equal('');
      expect(component.findAll('select#origin > option')).to.have.lengthOf(4);
      component.findAll('select#origin > option').at(1).element.selected = true;
      component.find('select#origin').trigger('change');
      expect(component.vm.selectedOrigin).not.to.equal('');
    });

    it('Updates destination city', () => {
      expect(component.vm.selectedDestination).to.equal('');
      expect(component.findAll('select#dest > option')).to.have.lengthOf(4);
      component.findAll('select#dest > option').at(1).element.selected = true;
      component.find('select#dest').trigger('change');
      expect(component.vm.selectedDestination).not.to.equal('');
    });

    it('Return date field only for roundtrip', async () => {
      const fieldNotVisibleForOneWay = expect(component.find('input#arr-date').exists()).to.be.false;
      component.setProps({
        returnTrip: true,
      });
      await component.vm.$nextTick();
      return expect(component.find('input#arr-date').exists()).to.be.true && fieldNotVisibleForOneWay;
    });
  });
});
