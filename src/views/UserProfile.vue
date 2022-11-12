<template>
  <div class="profilePage">
    <div class="relative mb-8">
      <img
        class="w-full h-36"
        src="http://placeimg.com/640/360/any"
        :alt="user.name"
      />
      <div class="absolute top-28 flex left-2">
        <img
          class="h-16 w-16 rounded-full mr-6"
          src="http://placeimg.com/50/50/any"
          :alt="user.name"
        />
        <p class="mt-auto" @click="showUserProfile">{{ user.name }}</p>
        <p class="mt-auto text-light">{{ "@" + user.username }}</p>
      </div>
    </div>
    <div
      v-if="isMe && postsArray.length"
      class="w-5/6 mt-16 mb-8 flex ml-auto mr-auto text-center"
    >
      <button
        class="w-1/2 h-12 w-full hover:bg-lightblue rounded-full hover:text-blue text-white bg-blue border-blue border-2"
        @click="showPosts = true"
      >
        Posts
      </button>
      <button
        class="w-1/2 h-12 w-full hover:bg-lightblue rounded-full hover:text-blue text-white bg-blue border-blue border-2"
        @click="showPosts = false"
      >
        Folowing
      </button>
    </div>
    <div v-if="!showPosts">
      <div v-for="post in postsArray" :key="post.id">
        <Post :post-content="post" />
      </div>
    </div>
    <div v-else>
      <div v-for="post in userPosts" :key="post.id">
        <Post :post-content="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "UserProfile",
  components: {
    Post,
  },
  data() {
    return {
      showPosts: true,
      postsArray: [],
      userName: "",
    };
  },
  created() {
    const self = this,
      followingArray = this.$store.getters.getFollowing(),
      followindIds = followingArray && followingArray.map((item) => item.id);

    this.userName = this.$route.params && this.$route.params.userName;

    followindIds &&
      followindIds.forEach((item) => {
        this.postsArray = this.postsArray.concat(
          self.$store.getters.getMembersPosts(item)
        );
      });
  },
  computed: {
    userPosts: function () {
      return this.$store.getters.getMembersPosts(this.user.id);
    },
    loggedUser: function () {
      return this.$store.getters.getUser();
    },
    isMe: function () {
      return (
        this.loggedUser &&
        this.user &&
        this.loggedUser.username === this.user.username
      );
    },
    user: function () {
      return (
        this.userName && this.$store.getters.getMemberByName(this.userName)
      );
    },
  },
};
</script>
