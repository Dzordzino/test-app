<template>
  <div class="signupModal">
    <Input input-type="input" @textUpdated="updateEmail" />
    <Input input-type="input" @textUpdated="updateName" />
    <Input input-type="input" @textUpdated="updateUsername" />
    <Input input-type="input" @textUpdated="updatePassword" />
    <button @click="signup">Signup</button>
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
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    updateName: function (name) {
      this.name = name;
    },
    updateEmail: function (email) {
      this.email = email;
    },
    updateUsername: function (username) {
      this.username = username;
    },
    updatePassword: function (password) {
      this.password = password;
    },
    signup: async function () {
      const res = await this.$store.dispatch("signup", {
        name: this.name,
        email: this.email,
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
