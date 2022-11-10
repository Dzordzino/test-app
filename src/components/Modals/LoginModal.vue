<template>
  <div class="loginModal">
    <Input input-type="input" @textUpdated="updateUsername" />
    <Input input-type="input" @textUpdated="updatePassword" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: "LoginModal",
  components: {
    Input,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    updateUsername: function (username) {
      this.username = username;
    },
    updatePassword: function (password) {
      this.password = password;
    },
    login: async function () {
      const res = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      console.log(res);
    },
  },
};
</script>
<style scoped>
.loginModal {
  width: 100%;
  max-width: 500px;
  background: #fff;
}
</style>
