import Vue from 'vue';
import Router from 'vue-router';
import flightResults from './components/flight-results/flight-results.vue';

const routes = [
  { path: '/', component: flightResults },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;
