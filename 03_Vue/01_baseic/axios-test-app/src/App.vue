<script setup>
import axios from 'axios';

const url = '/api/todos';

// axios.get()은 비동기함수이기 때문에 결과를 바로 반환하지 않고 Promise 객체를 반환
// const response = axios.getUri(url);
//console.log('response', response);

const requestAxios = () => {
  axios.get(url).then((response) => {
    console.log('[axios] 응답객체: ', response);
    console.log('[axios data] 응답객체: ', response.data);
  });
};

const requestFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('[fetch 응답] : ', data);
    });
};
</script>

<template>
  <div>
    <button @click="requestAxios">axios버튼</button>
    <button @click="requestFetch">fetch버튼</button>
  </div>
</template>

<style scoped></style>
