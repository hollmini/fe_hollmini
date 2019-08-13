<template>
  <div>
    <h1>Ask detail</h1>
    <div v-html="fetchedAskItem.content"></div>
    <h2>comments</h2>
    <ul>
      <li v-for="item in fetchedAskItem.comments">
        <div v-html="item.content"></div>
        <small>{{ item.time_ago }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAskItem'
    ])
    // askItem() {
    //   return this.$store.state.askItem;
    // }
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_ITEM', askId);
  }
}
</script>

<style>

</style>
