import dateUtils from '../../date-utils';

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
    layover() {
      if (!this.hasHalt) {
        return {};
      }
      const { hours, minutes } = dateUtils.getTimeDifference(
        this.data[0].date, this.data[0].arrivalTime,
        this.data[1].date, this.data[1].departureTime,
      );

      return { hours, minutes };
    },
    duration() {
      let duration = null;
      if (this.hasHalt) {
        const { hours: tHours, minutes: tMinutes } = dateUtils.getTimeDifference(
          this.data[0].date, this.data[0].departureTime,
          this.data[1].date, this.data[1].arrivalTime,
        );

        const { hours: f1Hours, minutes: f1Minutes } = dateUtils.getTimeDifference(
          this.data[0].date, this.data[0].departureTime,
          this.data[0].date, this.data[0].arrivalTime,
        );

        const { hours: f2Hours, minutes: f2Minutes } = dateUtils.getTimeDifference(
          this.data[1].date, this.data[1].departureTime,
          this.data[1].date, this.data[1].arrivalTime,
        );

        duration = [{ hours: tHours, minutes: tMinutes },
          { hours: f1Hours, minutes: f1Minutes },
          { hours: f2Hours, minutes: f2Minutes }];
      } else {
        const { hours, minutes } = dateUtils.getTimeDifference(
          this.data.date, this.data.departureTime,
          this.data.date, this.data.arrivalTime,
        );

        duration = { hours, minutes };
      }
      return duration;
    },
  },
  mounted() {},
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
