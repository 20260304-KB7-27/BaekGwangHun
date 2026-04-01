import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Home from '@/pages/Home.vue';

/*
네비게이션 가드
- false 반환하게 되면 
*/

const membersIdGuard = (to, from) => {
  // /members인 경우 /members/:id 에서만 /members/:id로 접근가능
  if (from.name !== 'mmebers' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/members',
      name: '/members',
      component: () => import('@/pages/MemberList.vue'),
    },
    {
      // 지연 로딩 : 해당 경로에 처음 접근할 때 컴포넌트를 불러옴
      // 초기로딩 속도 개선
      path: '/members/:id',
      name: '/members/id',
      component: () => import('@/pages/MemberInfo.vue'),
      beforeEnter: membersIdGuard,
    },
  ],
});

export default router;
