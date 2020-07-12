import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import FlightCard from './flight-card.vue';

describe('FlightCard', () => {
  describe('Shows correct single flight data', () => {
    const component = shallowMount(FlightCard, {
      propsData: {
        data: {
          arrivalTime: '22:10',
          date: '2020/11/01',
          departureTime: '20:00',
          destination: 'Pune (PNQ)',
          flightNo: 'AI-115',
          name: 'Air India',
          origin: 'Delhi (DEL)',
          price: 5233,
        },
      },
    });
    it('Shows correct flight number', () => expect(component.find('.flight-no').text()).to.equal('AI-115'));
    it('Returns hasHalt as false', () => expect(component.vm.hasHalt).to.be.false);
    it('Returns empty summary', () => expect(component.vm.flightSummary).to.be.empty);
    it('Returns no layover', () => expect(component.vm.layover).to.be.empty);
    it('Returns corrects duration', () => expect(component.vm.duration.hours).to.equal('2')
    && expect(component.vm.duration.minutes).to.equal('10'));
  });

  describe('Shows correct multiple flight data', () => {
    const component = shallowMount(FlightCard, {
      propsData: {
        data: [
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
      },
    });
    it('Shows correct first flight number', () => expect(component.findAll('.flight-no').at(0).text()).to.equal('SJ-115'));
    it('Shows correct second flight number', () => expect(component.findAll('.flight-no').at(1).text()).to.equal('SJ-116'));
    it('Returns hasHalt as true', () => expect(component.vm.hasHalt).to.be.true);
    it('Returns correct summary', () => expect(component.vm.flightSummary.origin).to.equal('Delhi (DEL)')
    && expect(component.vm.flightSummary.destination).to.equal('Pune (PNQ)'));
    it('Returns correct layover', () => expect(component.vm.layover.hours).to.equal('1')
    && expect(component.vm.layover.minutes).to.equal('45'));
    it('Returns corrects duration', () => expect(component.vm.duration[0].hours).to.equal('4')
    && expect(component.vm.duration[0].minutes).to.equal('45'));
  });
});
