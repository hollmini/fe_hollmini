<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner'); // 이벤트 보냄 $emit 사용
    this.$store.dispatch('FETCH_NEWS');
    bus.$emit('end:spinner'); // 이벤트 보냄 $emit 사용
  },
}
</script>