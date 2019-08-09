<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
/* scoped 속성 : 해당하는 컴포넌트에만 css가 적용되도록 함 */
.header {
  display: flex;
  padding: 8px;
  background-color: #42b883;
  color: #fff;
}
.header a {
  color: #fff;
}
.header .router-link-exact-active {
  color: #35495e;
}
</style>
