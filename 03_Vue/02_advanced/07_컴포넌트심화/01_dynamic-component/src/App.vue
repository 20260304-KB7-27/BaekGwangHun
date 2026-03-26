<template>
  <h1>동적 컴포넌트</h1>
  <hr />
  <div>
    <h1>태평양 전쟁의 해전</h1>
    <ul>
      <li v-for="tab in tabs" :key="tab.id">
        <a
          @click.prevent="changeTab(tab.id)"
          style="cursor: pointer; color: blue"
        >
          {{ tab.label }}
        </a>
      </li>
    </ul>

    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; // ref, computed가 없어서 에러 났던 거야
import CoralSeaTab from './components/CoralSeaTab.vue';
import LeyteGulfTab from './components/LeyteGulfTab.vue';
import MidwayTab from './components/MidwayTab.vue';

/*
동적 컴포넌트
- is 속성 활용하여 런타임에 렌더링알 컴포넌트를 동적으로 바꿀수있다.
- tabui/ 스탭ui
*/

const tabComponents = {
  CoralSeaTab,
  LeyteGulfTab,
  MidwayTab,
};

const currentTagName = ref('CoralSeaTab');

const currentTab = computed(() => tabComponents[currentTagName.value]);

const tabs = ref([
  { id: 'CoralSeaTab', label: '산호해 해전' },
  { id: 'MidwayTab', label: '미드웨이 해전' },
  { id: 'LeyteGulfTab', label: '레이테만 해전' },
]);

function changeTab(tabid) {
  currentTagName.value = tabid;
}
</script>
