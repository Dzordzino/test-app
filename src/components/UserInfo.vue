<template>
  <div class="userInfo">
    <img
      src="http://placeimg.com/50/50/any"
      :alt="userData.name"
      @click="showUserProfile"
    />
    <p @click="showUserProfile">{{ userData.name }}</p>
    <p>{{ "@" + userData.username }}</p>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    showUserProfile: function () {
      this.$router.push(this.userData.username);
    },
  },
};
</script>
<style scoped>
.userInfo {
  width: 100%;
  padding: 10px;
}
img,
p {
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
img {
  border-radius: 50%;
}
</style>
