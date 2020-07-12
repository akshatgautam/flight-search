import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightList from './flight-list.vue';

describe('FlightList', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(FlightList, {
      propsData: {
        flightList: [
          {
            arrivalTime: '22:10',
            date: '2020/11/01',
            departureTime: '20:00',
            destination: 'Pune (PNQ)',
            flightNo: 'AI-115',
            name: 'Air India',
            origin: 'Delhi (DEL)',
            price: 5233,
          },
          [
            {
              arrivalTime: '9:15',
              date: '2020/11/02',
              departureTime: '8:15',
              destination: 'Bengaluru (BLR)',
              flightNo: 'SJ-115',
              name: 'SpiceJet',
              origin: 'Delhi (DEL)',
              price: 3549,
            },
            {
              arrivalTime: '13:00',
              date: '2020/11/02',
              departureTime: '11:00',
              destination: 'Pune (PNQ)',
              flightNo: 'SJ-116',
              name: 'SpiceJet',
              origin: 'Bengaluru (BLR)',
              price: 5645,
            },
          ],
        ],
        origin: 'Delhi - (DEL)',
        destination: 'Pune - (PNQ)',
        passengers: 1,
        journeyDate: '',
      },
    });
  });

  describe('Computed properties', () => {
    it('Returns correct day', () => {
      expect(component.vm.day).to.equal('');
      component.setProps({
        journeyDate: new Date(),
      });
      expect(component.vm.day).to.equal('Sun, 12 July');
    });
    it('Returns full list if no price cap with single passenger', () => expect(component.vm.displayList).to.have.lengthOf(2));

    it('Returns full list if no price cap with two passengers', () => {
      component.setProps({
        passengers: 2,
      });
      expect(component.vm.displayList[0].price).to.equal(10466);
    });

    it('Returns partial list with price cap for 1 passenger', () => {
      component.setProps({
        passengers: 1,
      });
      component.setData({
        priceCap: 5500,
      });
      expect(component.vm.displayList).to.have.lengthOf(1);
    });

    it('Returns partial list with price cap for 2 passengers', () => {
      component.setProps({
        passengers: 2,
      });
      component.setData({
        priceCap: 11000,
      });
      return expect(component.vm.displayList).to.have.lengthOf(1)
      && expect(component.vm.displayList[0].price).to.equal(10466);
    });
  });
});
