<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li
              class="nav-item"
              v-for="(label, index) in Music_type"
              :key="label.text"
            >
              <a
                class="nav-link"
                href="#"
                :class="{ active: label.isActive }"
                @click="
                  setActive(label);
                  goToPage(index);
                "
                >{{ label.text }}</a
              >
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item" v-for="label in user_type" :key="label.text">
              <a class="nav-link" href="#">{{ label.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      Music_type: [
        { text: "首页", isActive: true },
        { text: "华语", isActive: false },
        { text: "日韩", isActive: false },
        { text: "欧美", isActive: false },
        { text: "Remix", isActive: false },
        { text: "纯音乐", isActive: false },
        { text: "异次元", isActive: false },
        { text: "特供", isActive: false },
        { text: "茶馆", isActive: false },
        { text: "百科", isActive: false },
        { text: "充值", isActive: false },
        { text: "站务", isActive: false },
      ],
      user_type: [{ text: "消息" }, { text: "登陆" }, { text: "退出" }],
      index: null,
    };
  },
  methods: {
    // 设置选中状态
    setActive(label) {
      this.Music_type.forEach((item) => {
        item.isActive = false; // 先将所有项的 isActive 属性设置为 false
      });
      label.isActive = true; // 将点击的项的 isActive 属性设置为 true
    },
    // 路由跳转
    goToPage(index) {
      this.index = index;
      const routes = ["Home", "Chinese", "Japanese_and_Korean", "Western", "Remix", "Pure_Music", "Alternate_Dimension", "Exclusive", "Tea_House", "Encyclopedia", "Top-up", "Site_Affairs"];
      const routeName = routes[this.index]; // 使用 this.index 而不是 index
      this.$router.push({ name: routeName });
      // 检查是否为首页按钮
      if (routeName === "Home") {
        // 如果是首页按钮，直接刷新当前页面
        this.$router.go(0);
      } else {
        // 如果不是首页按钮，进行正常的路由导航
        this.$router.push({ name: routeName });
      }
      console.log(routeName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>