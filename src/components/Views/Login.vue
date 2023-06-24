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
          <label> <input v-model="rememberMe" type="checkbox" /> 记住我 </label>
          <router-link to="/signin" class="registration-link">注册</router-link>
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

      // Perform login logic here
      // You can access the email, password, and rememberMe values from the data object

      // Example:
      if (
        this.email === "example@example.com" &&
        this.password === "password"
      ) {
        // Login successful
        alert("Logged in");
      } else {
        // Login failed
        alert("Invalid credentials");
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
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.checkbox {
  display: flex;
  justify-content: space-between;
}
.registration-link {
  text-decoration: none;
}
</style>
