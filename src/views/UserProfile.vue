<template>
  <div class="profilePage">
    <div v-if="loggedUser.username === user.username" class="buttonWrapper">
      <button @click="showPosts = true">Posts</button>
      <button @click="showPosts = false">Folowing</button>
    </div>
    <div v-if="!showPosts">
      <p>Following</p>
      <div v-for="post in postsArray" :key="post.id">
        <Post :post-content="post" />
      </div>
    </div>
    <div v-else>
      <p>Posts</p>
      <div v-for="post in userPosts" :key="post.id">
        <Post :post-content="post" />
      </div>
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
      showPosts: true,
      postsArray: [],
    };
  },
  created() {
    const store = useStore(),
      userName = this.$route.params && this.$route.params.userName,
      self = this,
      followingArray = this.$store.getters.getFollowing(),
      followindIds = followingArray && followingArray.map((item) => item.id);

    this.user = userName && store.getters.getMemberByName(userName);

    followindIds &&
      followindIds.forEach((item) => {
        console.log(self.$store.getters.getMembersPosts(item));
        this.postsArray = this.postsArray.concat(
          self.$store.getters.getMembersPosts(item)
        );
      });
  },
  computed: {
    userPosts: function () {
      return this.user ? this.$store.getters.getMembersPosts(this.user.id) : "";
    },
    loggedUser: function () {
      return this.$store.getters.getUser();
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
