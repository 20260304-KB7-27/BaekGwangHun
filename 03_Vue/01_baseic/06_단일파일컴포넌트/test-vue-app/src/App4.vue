<template>
  <div>
    <h2>App Component</h2>
    <hr />
    <InputName @name-change="nameChangeHandler"></InputName>
    <h3>App Data : {{ parentName }}</h3>
  </div>
</template>

<script setup>
import InputName from './components/inputName.vue';
import { ref } from 'vue';

// 1. 자식 컴포넌트에서 이벤트 발생 (이벤트 이름 : change-name)
// 2. 부모 컴포넌트에서 이벤트 감지 (@name-changee -> 이떄 이벤트 객체로 데이터를 전달받을 수 있음
// 3. 부모 컴포넌트의 이벤트 핸들러 동작 (nameChangerHandler)87877
const parentName = ref('기본값');
const nameChangeHandler = (event) => {
  parentName.value = event.name;
};
</script>

<style lang="scss" scoped></style>
