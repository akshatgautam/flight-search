export default {
  name: 'flight-search',
  components: {},
  props: {},
  data() {
    return {
      originList: [
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
        {
          label: 'Pune - (PNQ)',
          value: 'PNQ',
        },
      ],
      selectedOrigin: '',
      selectedDestination: '',
    };
  },
  directives: {},
  computed: {
    destinationList() {
      return this.originList.filter((place) => place.value !== this.selectedOrigin);
    },
    enableSearch() {
      return this.selectedOrigin && this.selectedDestination;
    },
  },
  mounted() {},
  methods: {
    searchFlights() {
      this.$emit('flightSearch', {
        origin: this.selectedOrigin,
        destination: this.selectedDestination,
      });
    },
  },
};
