import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '@/pages/coaches/CoachesList';
import store from '@/store/index';
import NotFound from '@/pages/NotFound';

const CoachesDetail = () => import('@/pages/coaches/CoachesDetail');
const CoachesRegistration = () => import('@/pages/coaches/CoachesRegistration');
const ContactCoach = () => import('@/pages/requests/ContactCoach');
const RequestsReceived = () => import('@/pages/requests/RequestsReceived');
const UserAuth = () => import('@/pages/auth/UserAuth');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coaches' },
    {path: '/coaches', component: CoachesList},
    {path: '/coaches/:id', component: CoachesDetail, props: true, children: [
        {path: '/contact', component: ContactCoach},
      ]},
    {path: '/register', component: CoachesRegistration, meta: { requiresAuth: true }},
    {path: '/requests', component: RequestsReceived, meta: { requiresAuth: true }},
    {path: '/auth', component: UserAuth, meta: { requiresUnauth: true }},
    {path: '/:notFound(.*)', component: NotFound},
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;