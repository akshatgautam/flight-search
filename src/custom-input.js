import Vue from 'vue';

const customInput = Vue.directive('custom-input', {
  bind(el) {
    el.addEventListener('focus', () => el.parentElement.classList.add('focused'));
    el.addEventListener('blur', () => {
      if (!el.value) {
        el.parentElement.classList.remove('focused');
      }
    });
  },

  inserted(el) {
    if (el.value) {
      el.parentElement.classList.add('focused');
    }
  },
  update(el) {
    if (el.value) {
      el.parentElement.classList.add('focused');
    } else {
      el.parentElement.classList.remove('focused');
    }
  },
  componentUpdated(el) {
    if (el.value) {
      el.parentElement.classList.add('focused');
    } else {
      el.parentElement.classList.remove('focused');
    }
  },
});

export default customInput;
