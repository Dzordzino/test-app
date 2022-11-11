<template>
  <div class="mb-4 px-8 py-6 bg-gray-100 rounded-lg">
    <UserInfo :user-data="user" />
    <div v-if="loggedUser.username === user.username" class="text-right">
      <button class="cursor-pointer h-8 w-8" @click="deletePost">
        <i class="fas fa-minus text-red"></i>
      </button>
      <button class="cursor-pointer h-8 w-8" @click="editPost">
        <i class="far fa-edit ml-3"></i>
      </button>
    </div>

    <div class="text-2xl">{{ postContent.title }}</div>
    <div class="mt-2">{{ postContent.body }}</div>
    <div class="mt-4">
      <button
        class="w-1/2 cursor-pointer"
        @click="hideComments = !hideComments"
      >
        {{ "Comments (" + commentsNumber + ")" }}
      </button>
      <button
        class="text-center w-1/2 h-8 w-8 cursor-pointer"
        @click="replayClick"
      >
        <i class="far fa-comment"></i>
      </button>
    </div>
  </div>
  <div v-if="!hideComments">
    <Comment
      v-for="comment in postContent.comments"
      :key="comment.id"
      :comment="comment"
    />
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
    loggedUser: function () {
      return this.$store.getters.getUser();
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
