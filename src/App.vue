<template>
  <div id="app">
    <MainTabbar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabbar from "./components/content/MainTabbar";
export default {
  name: 'App',
  components: {MainTabbar},
}

</script>

<style>
@import "./assets/css/base.css"
</style>
