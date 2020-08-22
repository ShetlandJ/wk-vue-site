import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

export default [
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];
