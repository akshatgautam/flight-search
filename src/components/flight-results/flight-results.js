import tab from '../tab/tab.vue';
import flightSearch from '../flight-search/flight-search.vue';
import flightList from '../flight-list/flight-list.vue';
import endpoints from '../../endpoints';
import searchMixin from '../../search-mixin';

export default {
  name: 'flight-results',
  components: {
    tab,
    flightSearch,
    flightList,
  },
  props: {},
  data() {
    return {
      flightData: null,
      origin: '',
      destination: '',
      suggestedToFlights: [],
      suggestedFromFlights: [],
      departureDate: '',
      returnDate: '',
      tabs: ['one-way', 'round-trip'],
      initialTab: 'one-way',
    };
  },
  mixins: [searchMixin],
  computed: {},
  created() {
    this.axios
      .get(endpoints.flightData)
      .then(this.handleFlightsResponse)
      .catch(this.handleFlightsDataError);
  },
  mounted() {},
  methods: {
    handleFlightsResponse(res) {
      if (res.data) {
        this.flightData = res.data;
        this.dataProcessor(this.flightData);
      }
    },
    handleFlightsDataError(err) {
      console.log(err);
    },
    findSearchedFlights(searchObject) {
      this.suggestedFromFlights = [];
      this.suggestedToFlights = [];
      this.origin = searchObject.originLabel;
      this.destination = searchObject.destinationLabel;
      this.departureDate = searchObject.departureDate;
      this.suggestedToFlights = this
        .getFlights(searchObject.originCode, searchObject.destinationCode);
      if (searchObject.returnTrip) {
        this.returnDate = searchObject.returnDate;
        this.suggestedFromFlights = this
          .getFlights(searchObject.destinationCode, searchObject.originCode);
      }
    },
  },
};
