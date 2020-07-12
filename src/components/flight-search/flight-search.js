import datepicker from 'vuejs-datepicker';
import customInput from '../../custom-input';
import dateUtils from '../../date-utils';
import debounceMixin from '../../debounce-mixin';
import bus from '../../bus';

export default {
  name: 'flight-search',
  components: {
    datepicker,
  },
  props: {
    returnTrip: {
      type: Boolean,
      required: false,
    },
  },
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
      departureDate: '',
      returnDate: '',
      dateFormat: 'dd-MM-yyyy',
      allowedDates: null,
      passengers: 1,
      priceCap: 0,
      minPrice: 0,
      maxPrice: 20000,
    };
  },
  directives: {
    customInput,
  },
  mixins: [
    debounceMixin,
  ],
  computed: {
    destinationList() {
      return this.originList.filter((place) => place.value !== this.selectedOrigin);
    },
    enableSearch() {
      return !!(
        this.selectedOrigin
        && this.selectedDestination
        && this.departureDate
        && (this.returnTrip ? this.returnDate : true)
      );
    },
    nameCodeMap() {
      const map = {};
      this.originList.forEach((place) => {
        map[place.value] = place.label;
      });
      return map;
    },
    formattedDepartureDate() {
      return this.departureDate
        ? dateUtils.dateFormatter(this.departureDate)
        : '';
    },
    formattedReturnDate() {
      return this.returnDate
        ? dateUtils.dateFormatter(this.returnDate)
        : '';
    },
  },
  created() {
    this.allowedDates = {
      customPredictor(date) {
        function dateFormatter(d) {
          if (d instanceof Date) {
            return d.toLocaleDateString().split('/').reverse().join('/');
          } return d;
        }
        const today = new Date();
        return Date.UTC(...dateFormatter(date).split('/'))
        < Date.UTC(...dateFormatter(today).split('/'));
      },
    };
  },
  methods: {
    searchFlights() {
      this.priceCap = 0;
      this.filterResults();
      this.$emit('flightSearch', {
        originCode: this.selectedOrigin,
        originLabel: this.nameCodeMap[this.selectedOrigin],
        destinationCode: this.selectedDestination,
        destinationLabel: this.nameCodeMap[this.selectedDestination],
        departureDate: this.departureDate,
        returnDate: this.returnDate,
        returnTrip: this.returnTrip,
        passengers: this.passengers,
      });
    },
    filterResults() {
      bus.$emit('priceCapped', this.priceCap);
    },
    triggerSearchFilter() {
      this.debounce.call(this, null, this.filterResults, 250);
    },
  },
};
