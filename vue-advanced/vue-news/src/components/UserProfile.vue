<template>
  <div class="user_container">
    <div>
      아이콘 
    </div>
    <div class="user_description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 --> 
      </slot>
      <slot name="time">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <slot name="karma">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // 2번 데이터 불러 오기
  props: {
    info: Object
  },
  // 1번 데이터 불러오기
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   } 
  // },
}
</script>

<style scoped>
.user_container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user_description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>