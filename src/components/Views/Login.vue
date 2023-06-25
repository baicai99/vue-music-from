<template>
  <div class="centered-container">
    <div class="form-signin text-center">
      <form @submit="login">
        <img
          class="mb-4"
          src="../../assets/logo.png"
          alt=""
          width="72"
          height="72"
        />
        <div class="form-floating">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">邮箱</label>
        </div>
        <div class="form-floating">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">密码</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input v-model="rememberMe" type="checkbox" /> 记住我
          </label>
          <router-link to="/Register" class="registration-link"
            >注册账号</router-link
          >
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">登陆</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      // 模拟成功的登录以进行演示
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (this.email === storedEmail && this.password === storedPassword) {
        // 登录成功
        this.$emit("login", storedEmail); // 在父组件中触发登录事件，并传递邮箱作为参数
        alert("登录成功");
        // 登录成功后刷新页面
        this.$router.push("/");
        window.location.reload();
        // 跳转到主页
      } else {
        // 登录失败
        alert("用户名或密码错误");
      }
    },
  },
};
</script>

<style>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.checkbox {
  display: flex;
  justify-content: space-between;
}

.registration-link {
  text-decoration: none;
}
</style>
