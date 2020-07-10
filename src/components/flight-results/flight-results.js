import flightSearch from '../flight-search/flight-search.vue';
import flightList from '../flight-list/flight-list.vue';
import endpoints from '../../endpoints';
import searchMixin from '../../search-mixin';

export default {
  name: 'flight-results',
  components: {
    flightSearch,
    flightList,
  },
  props: {},
  data() {
    return {
      flightData: null,
      suggestedToFlights: null,
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
      this.suggestedToFlights = this.getFlights(searchObject.origin, searchObject.destination);
    },
  },
};
