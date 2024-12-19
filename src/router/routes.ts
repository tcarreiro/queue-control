import type { RouteRecordRaw } from 'vue-router';
import NotFoundPage from 'pages/ErrorNotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/RouterLayout.vue')
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: NotFoundPage,
  },
];

export default routes;
