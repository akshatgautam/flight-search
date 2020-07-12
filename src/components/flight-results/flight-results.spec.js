// import { shallowMount } from '@vue/test-utils';
// import { expect } from 'chai';
// import axios from 'axios';
// import FlightResults from './flight-results.vue';

// const mockData = {
//   data: [
//     {
//       arrivalTime: '6:00',
//       date: '2020/11/01',
//       departureTime: '5:00',
//       destination: 'Mumbai (BOM)',
//       flightNo: 'AI-101',
//       name: 'Air India',
//       origin: 'Pune (PNQ)',
//       price: 3525,
//     },
//     {
//       arrivalTime: '9:50',
//       date: '2020/11/01',
//       departureTime: '7:20',
//       destination: 'Delhi (DEL)',
//       flightNo: 'AI-102',
//       name: 'Air India',
//       origin: 'Mumbai (BOM)',
//       price: 5635,
//     },
//     {
//       arrivalTime: '7:10',
//       date: '2020/11/01',
//       departureTime: '6:10',
//       destination: 'Mumbai (BOM)',
//       flightNo: 'AI-103',
//       name: 'Air India',
//       origin: 'Pune (PNQ)',
//       price: 2537,
//     },
//     {
//       arrivalTime: '10:20',
//       date: '2020/11/01',
//       departureTime: '8:10',
//       destination: 'Delhi (DEL)',
//       flightNo: 'AI-104',
//       name: 'Air India',
//       origin: 'Pune (PNQ)',
//       price: 4681,
//     },
//   ],
// };

// describe('FlightResults', () => {
//   let component;

//   beforeEach(() => {
//     component = shallowMount(FlightResults, {
//       data: {
//         // axios,
//         flightData: mockData,
//       },
//       axios,
//     });
//   });

//   const searchObject = {
//     originCode: 'PNQ',
//     originLabel: 'Pune',
//     destinationCode: 'DEL',
//     destinationLabel: 'Delhi',
//     departureDate: '12/07/2020',
//     returnDate: '13/07/2020',
//     returnTrip: true,
//     passengers: 1,
//   };

//   it('sets flight data', () => {
//     component.vm.findSearchedFlights(searchObject);
//     return (
//       expect(component.vm.suggestedToFlights).not.to.be.empty
//       && expect(component.vm.suggestedFromFlights).not.to.be.empty
//     );
//   });
// });
