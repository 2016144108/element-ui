<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{name:'Layout1'}">layout</router-link>
      </li>
    </ul>
    <router-view :key="key"/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  ul{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
<script>
  export default {
    name: "App",
    mounted() {},
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
    }
  };
</script>
