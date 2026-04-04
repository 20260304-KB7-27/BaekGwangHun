<script setup>
import axios from 'axios';

const url = '/api/todos';

// axios.get()은 비동기함수이기 때문에 결과를 바로 반환하지 않고 Promise 객체를 반환
// const response = axios.getUri(url);
// console.log('response', response);

const data = {
  todo: '윗몸일으키기',
  desc: '너무 빠르지 않게...',
};

// const requestAxios = () => {
//   axios.post(url).then((response) => {
//     console.log('[axios] 응답객체: ', response.data);
//   });
// };

// ✔ 함수명 수정 + async 정상 사용
const requestAxios = async () => {
  const response = await axios.post(url, data);
  console.log('응답 데이터 :', response.data);
};
</script>

<template>
  <div>
    <button @click="requestAxios">axios버튼</button>
  </div>
</template>

<style scoped></style>
