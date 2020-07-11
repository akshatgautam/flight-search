import datepicker from 'vuejs-datepicker';
import customInput from '../../custom-input';

export default {
  name: 'flight-search',
  components: {
    datepicker,
  },
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
      returnTrip: false,
      departureDate: '',
      returnDate: '',
      dateFormat: 'dd-MM-yyyy',
    };
  },
  directives: {
    customInput,
  },
  computed: {
    destinationList() {
      return this.originList.filter((place) => place.value !== this.selectedOrigin);
    },
    enableSearch() {
      return this.selectedOrigin && this.selectedDestination;
    },
    nameCodeMap() {
      const map = {};
      this.originList.forEach((place) => {
        map[place.value] = place.label;
      });
      return map;
    },
    formattedDepartureDate() {
      return this.departureDate ? this.departureDate.toLocaleDateString().split('/').reverse().join('/') : '';
    },
    formattedReturnDate() {
      return this.returnDate ? this.returnDate.toLocaleDateString().split('/').reverse().join('/') : '';
    },
  },
  mounted() {},
  methods: {
    searchFlights() {
      this.$emit('flightSearch', {
        originCode: this.selectedOrigin,
        originLabel: this.nameCodeMap[this.selectedOrigin],
        destinationCode: this.selectedDestination,
        destinationLabel: this.nameCodeMap[this.selectedDestination],
        departureDate: this.departureDate,
        returnDate: this.returnDate,
        returnTrip: this.returnTrip,
      });
    },
  },
};
