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
import Music_list from "./components/MusicRanking/MusicList.vue";
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
    Music_list,
    Pagination,
    Footer,
  },
  methods: {
    beforeRouteUpdate(to, from, next) {
      // 在路由导航之前检查目标路由，根据需要修改组件的显示状态
      if (to.path === "/post") {
        this.showPagination = false;
      } else {
        this.showPagination = true;
      }
      next();
    },
  },
};
</script>

<style lang="less"></style>
