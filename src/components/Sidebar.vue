<template>
  <div class="sidebar">
    <div v-if="user.username">
      {{ user.username }}
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <button @click="login">Login</button>
      <button @click="signup">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    user: function () {
      return this.$store.getters.getUser();
    },
  },
  methods: {
    login: function () {
      this.$store.dispatch("openModal", {
        type: "login",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
    signup: function () {
      this.$store.dispatch("openModal", {
        type: "signup",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
    logout: function () {
      this.$store.commit("logoutUser");
    },
  },
};
</script>
<style scoped>
.sidebar {
  width: 100%;
  max-width: 200px;
  text-align: center;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
