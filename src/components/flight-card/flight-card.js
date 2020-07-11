export default {
  name: 'flight-card',
  components: {},
  props: {
    data: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      detailsVisible: false,
    };
  },
  directives: {},
  computed: {
    hasHalt() {
      return Array.isArray(this.data);
    },
    flightSummary() {
      let summary = {};

      if (this.hasHalt) {
        summary = {
          arrivalTime: this.data[1].arrivalTime,
          date: this.data[0].date,
          departureTime: this.data[0].departureTime,
          destination: this.data[1].destination,
          origin: this.data[0].origin,
          price: this.data[0].price + this.data[1].price,
        };
      }

      return summary;
    },
  },
  mounted() {},
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
