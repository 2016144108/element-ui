<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{name:'Layout1'}">layout</router-link>
      </li>
    </ul>
    <router-view/>
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
