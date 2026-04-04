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
  if (from.name !== 'mebers' && from.name !== 'members/id') {
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
    {
      /*
      중첩 라우팅
      - 부모 컴포넌트 안에 <RouterView>를 두고 children 배열로 자식 라우트를 정의
      - 자식 컴포넌트는 부모의 <RouterView> 위치에 렌더링

      */
      path: '/members-nested',
      component: () => import('@/pages/nested/MembersLayout.vue'),
      children: [
        {
          //기본 값 /members-nested
          path: '',
          name: 'members-nested',
          component: () => import('@/pages/nested/MemberDefault.vue'),
        },
        {
          //기본 값 /members-nested
          path: ':id',
          name: 'members-nested/detail',
          component: () => import('@/pages/nested/MemberDetail.vue'),
        },
      ],
    },
  ],
});

export default router;
