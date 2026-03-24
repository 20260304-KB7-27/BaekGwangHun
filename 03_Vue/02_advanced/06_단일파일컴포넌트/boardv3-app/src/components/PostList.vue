<script setup>
import PostItem from './PostItem.vue';

const props = defineProps({
  posts: Array,
  selectedPost: Object,
});

const emit = defineEmits(['select', 'delete', 'update']);
</script>

<template>
  <ul>
    <PostItem
      v-for="(post, index) in posts"
      :key="post.no"
      :post="post"
      :index="index"
      :selectedPost="selectedPost"
      @select="emit('select', $event)"
      @delete="emit('delete', $event)"
      @update="emit('update', $event)"
    />
  </ul>
</template>
