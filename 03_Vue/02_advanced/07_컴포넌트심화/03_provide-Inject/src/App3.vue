<template>
  <div>
    <h2>비동기 컴포넌트</h2>

    <AsyncComp />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingComp from './components/LoadingComp.vue';
import ErrorComp from './components/ErrorComp.vue';

// const AsyncComp = defineAsyncComponent(
//   () => import('./components/AsyncComponent.vue'),
// );

/*
defineAsyncComponent 사용 시점
- 초기 로딩 속도 개선이 필요할때
- 무겁거나(차트, 에디터) 자주 확인하지
*/

// 옵션 적용
const AsyncComp = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/AsyncComponent.vue'));
      });
    }),
  loadingComponent: LoadingComp, //delay 이후 로딩 중에 표시
  errorComponent: ErrorComp, //timeout 초과 또는 오류 발생시 표시
  delay: 200, // -> 3초 지나면 ErrorComponent
  timeout: 3000,
});
</script>
