<template>
  <div class="centered-container">
    <div class="form-signin text-center">
      <form @submit="register">
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

        <div class="form-floating">
          <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            id="floatingConfirmPassword"
            placeholder="Confirm Password"
          />
          <label for="floatingConfirmPassword">确认密码</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input v-model="agreeTerms" type="checkbox" /> 同意条款和条件
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">注册</button>
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
      confirmPassword: "",
      agreeTerms: false,
    };
  },
  mounted() {
    // 在组件加载时，从 localStorage 中恢复保存的输入值
    this.email = localStorage.getItem("email") || "";
    this.password = localStorage.getItem("password") || "";
    this.confirmPassword = localStorage.getItem("confirmPassword") || "";
    this.agreeTerms = localStorage.getItem("agreeTerms") === "true";
  },
  methods: {
    register(event) {
      event.preventDefault();

      if (this.password !== this.confirmPassword) {
        alert("密码不匹配");
      } else if (!this.agreeTerms) {
        alert("请同意条款和条件");
      } else {
        // 注册成功后保存输入值到 localStorage
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
        localStorage.setItem("confirmPassword", this.confirmPassword);
        localStorage.setItem("agreeTerms", this.agreeTerms.toString());

        alert("注册成功");

        // 跳转到登录页面
        this.$router.push("/login");
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

.form-signin input[type="email"],
.form-signin input[type="password"] {
  margin-bottom: 10px;
}

.checkbox {
  display: flex;
  justify-content: space-between;
}
</style>
