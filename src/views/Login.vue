<template>
  <main class="login">
    <section class="forms">
      <form @submit.prevent="register" class="register">
        <h2>Register</h2>
        <input type="email" placeholder="Email" v-model="register_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="register" />
      </form>
      <form @submit.prevent="login" class="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email" v-model="login_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="login" />
      </form>
    </section>
  </main>
</template>
<!-- _ -->
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return { login_form, register_form, login, register };
  },
};
</script>

<style lang="scss" scoped></style>
