<template>
  <li><input type="checkbox" :checked="checked" /> {{ name }}</li>
</template>

<!-- setup을 사용하지 않았을 때 -->
<script setup>
// defineProps : 부모 요소에서 전달받은 Props를 정의하는 함수

//유효성 검사
defineProps({
  id: [Number, String],
  name: {
    type: String,
    required: true, //기본적으로 false
  },
  checked: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
