import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHospital, faUserFriends, faDumbbell, faCalendarPlus, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import routes from './routes';

import App from './App.vue';
import './assets/sass/main.scss';

Vue.use(VueRouter);

library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faHospital);
library.add(faUserFriends);
library.add(faDumbbell);
library.add(faCalendarPlus);
library.add(faEnvelope);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    ...routes,
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
