import dateUtils from './date-utils';

const searchMixin = {
  data() {
    return {
      originDestinationMap: null,
    };
  },
  methods: {
    dataProcessor(array) {
      const codeRegex = /((?<=\()([A-Z]{3})(?=\)))/g;

      const outboundFlightsMap = {};
      const inboundFlightsMap = {};

      array.forEach((flight) => {
        const origin = flight.origin.match(codeRegex)[0];
        const destination = flight.destination.match(codeRegex)[0];

        if (outboundFlightsMap[origin]) {
          if (outboundFlightsMap[origin][destination]) {
            outboundFlightsMap[origin][destination].push(flight);
          } else {
            outboundFlightsMap[origin][destination] = [flight];
          }
        } else {
          outboundFlightsMap[origin] = {};
          outboundFlightsMap[origin][destination] = [flight];
        }

        if (inboundFlightsMap[destination]) {
          if (inboundFlightsMap[destination][origin]) {
            inboundFlightsMap[destination][origin].push(flight);
          } else {
            inboundFlightsMap[destination][origin] = [flight];
          }
        } else {
          inboundFlightsMap[destination] = {};
          inboundFlightsMap[destination][origin] = [flight];
        }
      });

      this.originDestinationMap = [outboundFlightsMap, inboundFlightsMap];
    },

    getFlights(origin, destination) {
      const [outbound, inbound] = this.originDestinationMap;
      const flights = [...outbound[origin][destination]];

      const allDestinationsForOrigin = Object.keys(outbound[origin]);
      const allOriginsForDestination = Object.keys(inbound[destination]);

      const possibleHalts = allDestinationsForOrigin
        .filter((halt) => allOriginsForDestination.includes(halt));

      let outboundPool = [];
      let inboundPool = [];

      possibleHalts.forEach((halt) => {
        outboundPool = [...outboundPool, ...outbound[origin][halt]];
        inboundPool = [...inboundPool, ...inbound[destination][halt]];
      });

      for (let i = 0; i < outboundPool.length; i += 1) {
        const oFlight = outboundPool[i];
        for (let j = 0; j < inboundPool.length; j += 1) {
          const iFlight = inboundPool[j];
          if (
            oFlight.destination === iFlight.origin
            && oFlight.date === iFlight.date
            && dateUtils.desiredTimeGap(
              oFlight.date, oFlight.arrivalTime,
              iFlight.date, iFlight.departureTime,
              30 * 60 * 1000,
            )
          ) {
            flights.push([oFlight, iFlight]);
          }
        }
      }
      return flights;
    },
  },
};

export default searchMixin;
