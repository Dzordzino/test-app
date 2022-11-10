<template>
  <div class="singlePost">
    <UserInfo :user-data="user" />
    <button @click="deletePost">Delete</button>
    <button @click="editPost">Edit</button>
    <div class="title">{{ postContent.title }}</div>
    <div class="text">{{ postContent.body }}</div>
    <div class="buttonWrapper">
      <button
        class="commentsToggleButton"
        @click="hideComments = !hideComments"
      >
        {{ "Comments " + commentsNumber }}
      </button>
      <button class="replayButton" @click="replayClick">Replay</button>
    </div>
    <div
      :class="{
        hide: hideComments,
      }"
    >
      <Comment
        v-for="comment in postContent.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Comment from "@/components/Comment.vue";
import UserInfo from "@/components/UserInfo.vue";
export default {
  name: "Post",
  components: {
    Comment,
    UserInfo,
  },
  props: {
    postContent: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      user: {},
      hideComments: true,
    };
  },
  async created() {
    const store = useStore();

    await store.dispatch("fetchPostComments", {
      postId: this.postContent.id,
    });

    this.user = store.getters.getMemberById(this.postContent.userId);
  },
  computed: {
    commentsNumber: function () {
      return this.postContent.comments && this.postContent.comments.length;
    },
  },
  methods: {
    replayClick: function () {
      const postData = this.postContent;
      this.$store.dispatch("openModal", {
        type: "replay",
        hasDocumentClose: true,
        hasCloseButton: false,
        payload: postData,
      });
    },
    deletePost: function () {
      this.$store.dispatch("deletePost", {
        id: this.postContent.id,
      });
    },
    editPost: function () {
      this.$store.dispatch("openModal", {
        type: "post",
        hasDocumentClose: true,
        hasCloseButton: false,
        payload: {
          id: this.postContent.id,
          body: this.postContent.body,
          title: this.postContent.title,
        },
      });
    },
  },
};
</script>
<style scoped>
.singlePost {
  width: 100%;
  padding: 10px;
}
.title {
  text-align: center;
  margin-bottom: 10px;
}
.text {
  margin-bottom: 10px;
}
.hide {
  height: 0;
  overflow: hidden;
}
</style>
