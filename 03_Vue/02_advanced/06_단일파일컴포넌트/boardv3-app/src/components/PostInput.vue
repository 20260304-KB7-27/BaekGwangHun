<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add']);

const title = ref('');
const content = ref('');

const add = () => {
  if (!title.value) return;

  emit('add', {
    title: title.value,
    content: content.value,
  });

  title.value = '';
  content.value = '';
};
</script>

<template>
  <div style="text-align: center">
    <input v-model="title" placeholder="제목" />
    <input v-model="content" placeholder="내용" />
    <button @click="add">작성</button>
  </div>
</template>
