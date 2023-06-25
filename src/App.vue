<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <Pagination></Pagination>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Views/Navbar.vue";
import Music_list from "./components/MusicRanking/MusicList.vue";
import Pagination from "./components/Views/Pagination.vue";
import Footer from "./components/Views/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Music_list,
    Pagination,
    Footer,
  },
};
</script>

<style lang="less"></style>
