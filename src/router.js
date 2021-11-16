import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '@/pages/coaches/CoachesList';
import CoachesDetail from '@/pages/coaches/CoachesDetail';
import CoachesRegistration from '@/pages/coaches/CoachesRegistration';
import ContactCoach from '@/pages/requests/ContactCoach';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import UserAuth from '@/pages/auth/UserAuth';
import NotFound from '@/pages/NotFound';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coaches' },
    {path: '/coaches', component: CoachesList},
    {path: '/coaches/:id', component: CoachesDetail, props: true, children: [
        {path: '/contact', component: ContactCoach},
      ]},
    {path: '/register', component: CoachesRegistration},
    {path: '/requests', component: RequestsReceived},
    {path: '/auth', component: UserAuth},
    {path: '/:notFound(.*)', component: NotFound},
  ]
});

export default router;