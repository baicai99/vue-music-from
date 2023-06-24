<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Views/Navbar.vue'
import Music_list from './components/MusicRanking/MusicList.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Music_list
  }
}
</script>

<style lang="less"></style>
