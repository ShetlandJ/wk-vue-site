import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import OurWorkPage from './pages/OurWorkPage.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/our-work',
    name: 'our-work',
    component: OurWorkPage,
  },
];
