<template>
  <div>
    <user-profile :info="fetchedAskItem">
      <router-link slot="username" :to="`/user/${fetchedAskItem.user}`">
        {{  fetchedAskItem.user }}
      </router-link>
      <p slot="time">{{ 'Posted ' + fetchedAskItem.time_ago }}</p>
    </user-profile>

    <section>
      <h1>{{ fetchedAskItem.title }}</h1>
    </section>
    <section>
      <div v-html="fetchedAskItem.content"></div>    
    </section>
    <section>
      <h2>comments</h2>
      <ul>
        <li v-for="item in fetchedAskItem.comments">
          <div v-html="item.content"></div>
          <small>{{ item.time_ago }}</small>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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
