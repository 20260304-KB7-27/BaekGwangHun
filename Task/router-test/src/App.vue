<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />

  <div class="container">
    <router-view />
  </div>
</template>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
