<template>
  <h1>::TodoList App</h1>

  <InputTodo @add="addTodo"></InputTodo>
  <TodoList
    :todolist="todolist"
    @toggle="toggleCompleted"
    @delete="deleteTodo"
  ></TodoList>
</template>

<script setup>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

import { ref } from 'vue';

let ts = new Date().getTime();

const todolist = ref([
  { id: ts, todo: '자전거 타기', completed: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
]);

// todo 삭제 기능
const deleteTodo = (id) => {
  // findIndex(콜백) : 콜백함수가 true를 반환하는 첫번째 요소의 인덱스를 반환
  let index = todolist.value.findIndex((item) => id === item.id);

  // splice (인덱스, 삭제할 요소의 갯수) : 인덱스부터 갯수만큼 배열의 요소를 삭제
  todolist.value.splice(index, 1);
};

// 완료상태 토글 기능
const toggleCompleted = (id) => {
  // findIndex(콜백) : 콜백함수가 true를 반환하는 첫번째 요소의 인덱스를 반환
  let index = todolist.value.findIndex((item) => id === item.id);

  // splice (인덱스, 삭제할 요소의 갯수) : 인덱스부터 갯수만큼 배열의 요소를 삭제
  todolist.value[index].completed = !todolist.value[index].completed;
};

// todo 추가 기능

const addTodo = (newTodo) => {
  todolist.value.push(newTodo);
};
</script>
