import flightCard from '../flight-card/flight-card.vue';

export default {
  name: 'flight-list',
  components: {
    flightCard,
  },
  props: {
    flightList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  directives: {},
  computed: {},
  mounted() {},
  methods: {},
};
