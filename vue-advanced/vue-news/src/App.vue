<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="true"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/Toolbar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false; 
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);  // $emit으로 보낸 명령어를 $on 으로 받음
    bus.$on('end:spinner', this.endSpinner);  // $emit으로 보낸 명령어를 $on 으로 받음
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner); 
    bus.$off('end:spinner', this.endSpinner); 
  },
}
</script>

<style>
body {
  padding :0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
