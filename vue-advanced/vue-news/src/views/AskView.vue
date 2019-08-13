<template>
  <div>
    <ul class="lst_wrap">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 영역 -->
        <div>
          <router-link :to="`/item/${item.id}`" class="tit">{{ item.title }}</router-link>
          <small class="link_txt">
            {{item.time_ago}} by 
            {{item.user}}
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
    // 4
    ...mapGetters([
      'fetchedAsk'
    ])

    // 3 
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // 2
    // ...mapState({
    //   fetchedAsk : state => state.ask
    // })

    // 1 
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
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
