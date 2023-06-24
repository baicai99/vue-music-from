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
            <li
              class="nav-item"
              v-for="(label, index) in user_type"
              :key="label.text"
              @click="goToUser(index)"
            >
              <a v-if="index !== 1" class="nav-link" href="#">{{ label.text }}</a>
              <a v-else class="nav-link" href="#">{{ userButtonText }}</a>
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
      user_type: [
        { text: "消息" },
        { text: "登陆" },
        { text: "退出" },
      ],
      index: null,
      userTypeIdx: null,
      isLoggedIn: false,
      userEmail: null,
    };
  },
  computed: {
    userButtonText() {
      return this.isLoggedIn ? this.userEmail : this.user_type[1].text;
    },
  },
  methods: {
    setActive(label) {
      this.Music_type.forEach((item) => {
        item.isActive = false;
      });
      label.isActive = true;
    },
    goToPage(index) {
      this.index = index;
      const routes = [
        "Home",
        "Chinese",
        "Japanese_and_Korean",
        "Western",
        "Remix",
        "Pure_Music",
        "Alternate_Dimension",
        "Exclusive",
        "Tea_House",
        "Encyclopedia",
        "Top-up",
        "Site_Affairs",
      ];
      const routeName = routes[this.index];
      this.$router.push({ name: routeName });
    },
    goToUser(index) {
      if (index === 1) {
        // 登录按钮被点击
        if (this.isLoggedIn) {
          // 已经登录
          this.userTypeIdx = -1; // 设置为-1表示显示用户邮箱
        } else {
          // 未登录
          this.userTypeIdx = index;
          // 这里添加打开登录模态框或其他相关的逻辑
        }
      } else if (index === 2) {
        // 退出按钮被点击
        localStorage.removeItem("email"); // 清除存储在 localStorage 中的用户邮箱
        localStorage.removeItem("password"); // 清除存储在 localStorage 中的密码
        localStorage.removeItem("confirmPassword"); // 清除存储在 localStorage 中的确认密码
        localStorage.removeItem("rememberMe"); // 清除存储在 localStorage 中的确认密码
        localStorage.removeItem("agreeTerms"); // 清除存储在 localStorage 中的确认密码
        localStorage.removeItem("isCheckIn"); // 清除存储在 localStorage 中的确认密码

        // 其他需要清除的 localStorage 数据...
        this.isLoggedIn = false; // 重置登录状态
        this.userEmail = null; // 重置用户邮箱

        // 重新加载页面
        window.location.reload();
      } else {
        // 其他按钮被点击
        this.userTypeIdx = index;
      }

      const User = ["Message", "Login", "LogOut"];
      const userRouteName = User[this.userTypeIdx];
      this.$router.push({ name: userRouteName });
    },

    updateLoginStatus() {
      const userEmail = localStorage.getItem("email");
      if (userEmail) {
        this.isLoggedIn = true;
        this.userEmail = userEmail;
      } else {
        this.isLoggedIn = false;
        this.userEmail = null;
      }
    },
  },
  mounted() {
    this.updateLoginStatus();
  },
};
</script>

<style lang="less" scoped>
</style>
