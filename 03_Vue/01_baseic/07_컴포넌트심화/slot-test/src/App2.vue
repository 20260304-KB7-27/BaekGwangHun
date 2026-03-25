<template>
  <div class="container">
    <div class="card-row">
      <BaseCard>
        <template #header>
          <h3>사용자 프로필</h3>
        </template>
        <div class="content">
          <p><strong>이름 :</strong> 홍길동</p>
          <p><strong>직무 :</strong> 프론트엔드 개발자</p>
          <p><strong>경력 :</strong> 3년</p>
        </div>
        <template #footer>
          <div class="actions">
            <button>취소</button>
            <button class="btn-save">저장</button>
          </div>
        </template>
      </BaseCard>

      <BaseCard>
        <template #header>
          <h3>공지사항</h3>
        </template>
        <p>3월 25일 이전에 풀던 example 컴포넌트로 분리해서 완성하세요.</p>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import BaseCard from './components/example2/BaseCard.vue';
</script>

<style scoped>
.container {
  padding: 20px;
}

.card-row {
  display: flex;
  gap: 20px;
  align-items: flex-start; /* 카드 높이가 달라도 상단 기준으로 정렬 */
}

.content p {
  margin: 5px 0;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn-save {
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
