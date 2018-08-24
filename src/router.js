import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Confirmation from './views/Confirmation.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: Confirmation,
    },
  ],
});
