<template>
  <div class="profilePage">
    <h1>This is user profile</h1>
    <div v-for="post in userPosts" :key="post.id">
      <Post :post-content="post" />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import { useStore } from "vuex";

export default {
  name: "UserProfile",
  components: {
    Post,
  },
  data() {
    return {
      user: "",
    };
  },
  created() {
    const store = useStore(),
      userName = this.$route.params && this.$route.params.userName;

    this.user = userName && store.getters.getMemberByName(userName);

    // user && (this.userPosts = store.getters.getMembersPosts(user.id));
  },
  computed: {
    userPosts: function () {
      return this.user ? this.$store.getters.getMembersPosts(this.user.id) : "";
    },
  },
};
</script>
<style scoped>
.profilePage {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
</style>
