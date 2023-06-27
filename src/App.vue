<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <Pagination v-if="showPagination"></Pagination>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Views/Navbar.vue";
import MusicList from "./components/MusicRanking/MusicListViewer.vue";
import Pagination from "./components/Views/Pagination.vue";
import Footer from "./components/Views/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      showPagination: true,
    };
  },
  components: {
    Navbar,
    MusicList,
    Pagination,
    Footer,
  },
  created() {
    // 在组件创建时检查当前路由，根据需要修改组件的显示状态
    if (this.$route.path === "/Post") {
      this.showPagination = false;
    } else {
      this.showPagination = true;
    }
  },
};
</script>

<style lang="less"></style>