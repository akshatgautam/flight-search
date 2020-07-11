import flightCard from '../flight-card/flight-card.vue';
import { months, days } from '../../enums';

export default {
  name: 'flight-list',
  components: {
    flightCard,
  },
  props: {
    flightList: {
      type: [Array],
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    journeyDate: {
      type: [Date, String],
      required: true,
    },
  },
  data() {
    return {};
  },
  directives: {},
  computed: {
    day() {
      return this.journeyDate ? `${days[this.journeyDate.getDay()]}, ${this.journeyDate.getDate()} ${
        months[this.journeyDate.getMonth()]
      }` : '';
    },
  },
  mounted() {},
  methods: {},
};
