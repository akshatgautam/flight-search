const debounceMixin = {
  data() {
    return {
      debouncetimer: null,
      defaultDelay: 1000,
    };
  },
  methods: {
    debounce(e, fnc, wait = this.defaultDelay) {
      window.clearTimeout(this.debouncetimer);
      this.debouncetimer = window.setTimeout(fnc.bind(null, e), wait);
    },
  },
};

export default debounceMixin;
