<template>
  <li><input type="checkbox" :checked="checked" /> {{ name }}</li>
</template>

<!-- setup을 사용하지 않았을 때 -->
<script setup>
// defineProps : 부모 요소에서 전달받은 Props를 정의하는 함수
defineProps([`name`, `checked`]);
</script>

<style lang="scss" scoped></style>
