<template>
  <div>
    <ul class="lst_wrap">
      <li v-for="item in fetchedNews" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 영역 -->
        <div>
          <a :href="item.url" class="tit" target="_blank">{{ item.title }}</a>
          <small class="link_txt">
            {{item.time_ago}} by 
            <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>

<style scoped>
.lst_wrap {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: center;
  list-style: none;
}

.points {
  display: flex;
  width: 80px;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: #42b883;
}

.tit {
  display: block;
  margin: 0;
}

.link_txt {
  color: #828282;
}
</style>
