<template>
  <div class="home">
    <Post v-for="post in postsData" :key="post.id" :post-content="post" />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post,
  },
  computed: {
    postsData: function () {
      return this.$store.getters.getPosts();
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
</style>
