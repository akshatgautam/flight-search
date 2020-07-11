export default {
  name: 'tab',
  props: {
    initialTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    tabClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
    tabPanelId() {
      return this.noSpaces(this.activeTab);
    },
  },
  mounted() {
    const tabHead = this.$refs.tabHeads;
    tabHead.addEventListener('keydown', this.handleTabChange);
  },
  methods: {
    noSpaces(tab) {
      const tabName = tab.split(' ').join('');
      return `${tabName}-tab`;
    },
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },
    switchTab(tabName) {
      this.activeTab = tabName;
      this.$emit('tabSwitched', tabName);
    },
    handleTabChange(event) {
      let activeTab;
      const tabHeads = this.$refs.head;
      Array.prototype.forEach.call(tabHeads, (tabHead, index) => {
        if (tabHead.classList.value.includes('active')) {
          activeTab = index;
        }
      });
      if (event.which === 37 && activeTab !== 0) {
        tabHeads[activeTab - 1].focus();
        tabHeads[activeTab - 1].click();
      } else if (event.which === 39 && activeTab !== tabHeads.length - 1) {
        tabHeads[activeTab + 1].focus();
        tabHeads[activeTab + 1].click();
      }
    },
  },
};
