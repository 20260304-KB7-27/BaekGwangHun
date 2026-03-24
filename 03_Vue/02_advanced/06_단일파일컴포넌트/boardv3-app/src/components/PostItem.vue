<script setup>
import { ref } from 'vue';

const props = defineProps({
  post: Object,
  index: Number,
  selectedPost: Object,
});

const emit = defineEmits(['select', 'delete', 'update']);

const isEditing = ref(false);
const editTitle = ref('');
const editContent = ref('');

const startEdit = () => {
  editTitle.value = props.post.title;
  editContent.value = props.post.content;
  isEditing.value = true;
};

const saveEdit = () => {
  emit('update', {
    ...props.post,
    title: editTitle.value,
    content: editContent.value,
  });
  isEditing.value = false;
};
</script>

<template>
  <li @click="emit('select', props.post)">
    <h3>
      {{ index + 1 }}. {{ post.title }}
      {{ selectedPost?.no === post.no ? '▲' : '▼' }}
    </h3>

    <div v-if="selectedPost?.no === post.no">
      <div v-if="isEditing">
        <input v-model="editTitle" @click.stop />
        <input v-model="editContent" @click.stop />
        <button @click.stop="saveEdit">저장</button>
        <button @click.stop="isEditing = false">취소</button>
      </div>

      <div v-else>
        <p>{{ post.content }}</p>
        <button @click.stop="startEdit">수정</button>
        <button @click.stop="emit('delete', post.no)">삭제</button>
      </div>
    </div>
  </li>
</template>
