import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Experience from '../components/Experience.vue';
import Resume from '../components/Resume.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
