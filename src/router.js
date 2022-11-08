import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'com1',
    component: () => import('./components/Com1.vue'),
    meta: {
      title: 'Com1',
      keepAlive: true,
    },
  },
  {
    path: '/com2',
    name: 'com2',
    component: () => import('./components/Com2.vue'),
    meta: {
      title: 'Com2',
      keepAlive: true,
    },
  },
  {
    path: '/com3',
    component: () => import('./components/Com3.vue'),
    children: [
      {
        path: '',
        component: () => import('./components/Com3Child1.vue'),
        meta: {
          title: 'child1',
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/com4',
    component: () => import('./components/Com4.vue'),
    children: [
      {
        path: '',
        component: () => import('./components/Com4Child1.vue'),
        meta: {
          title: 'child1',
          keepAlive: true,
        },
      },
	  {
        path: 'child2',
        component: () => import('./components/Com4Child2.vue'),
        meta: {
          title: 'child2',
          keepAlive: true,
        },
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
