import { RouteRecordRaw } from 'vue-router';
import blogPages from './blog';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/blog',
        component: () => import('layouts/BlogLayout.vue'),
        children: [
          { path: '', component: () => import('pages/BlogPage.vue') },
          ...blogPages,
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
