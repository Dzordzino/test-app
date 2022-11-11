<template>
  <div class="flex items-center">
    <img
      class="h-16 w-16 rounded-full mr-6"
      src="http://placeimg.com/50/50/any"
      :alt="userData.name"
      @click="showUserProfile"
    />
    <div>
      <p @click="showUserProfile">{{ userData.name }}</p>
      <p class="text-light">{{ "@" + userData.username }}</p>
    </div>

    <button
      class="ml-auto h-8 w-8 cursor-pointer"
      v-if="user.username !== userData.name"
      @click="followUser"
    >
      <i v-if="userData.following" class="fas fa-heart"></i>
      <i v-else class="fas opacity-30 fa-heart"></i>
    </button>
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
  computed: {
    user: function () {
      return this.$store.getters.getUser();
    },
  },
  methods: {
    showUserProfile: function () {
      this.$router.push(this.userData.username);
    },
    followUser: function () {
      this.$store.dispatch("followUser", {
        id: this.userData.id,
        follow: !this.userData.following,
      });
    },
  },
};
</script>
