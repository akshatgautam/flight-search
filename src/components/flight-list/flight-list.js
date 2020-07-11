import flightCard from '../flight-card/flight-card.vue';
import { months, days } from '../../enums';
import bus from '../../bus';

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
    passengers: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      priceCap: 0,
    };
  },
  directives: {},
  computed: {
    day() {
      return this.journeyDate ? `${days[this.journeyDate.getDay()]}, ${this.journeyDate.getDate()} ${
        months[this.journeyDate.getMonth()]
      }` : '';
    },
    displayList() {
      if (this.passengers > 1) {
        return this.flightList.map((entry) => {
          if (Array.isArray(entry)) {
            return entry.map((item) => ({
              ...item,
              price: this.passengers * item.price,
            }));
          } return {
            ...entry,
            price: this.passengers * entry.price,
          };
        });
      }
      if (Number(this.priceCap)) {
        return this.flightList.filter((entry) => {
          if (Array.isArray(entry)) {
            return entry.reduce((f1, f2) => f1.price + f2.price) < this.priceCap;
          } return entry.price < this.priceCap;
        });
      } return this.flightList;
    },
  },
  created() {
    bus.$on('priceCapped', ($event) => { this.priceCap = $event; });
  },
  methods: {},
};
