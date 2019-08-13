<template>
  <div>
    <ul class="lst_wrap">
      <li v-for="job in fetchedJobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <!-- 기타 영역 -->
        <div>
          <a :href="job.url" class="tit" target="_blank">{{ job.title }}</a>
          <small class="link_txt">
            {{job.time_ago}} by 
            <a :href="job.domain">{{ job.domain }}</a>
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
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
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
