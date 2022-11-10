<template>
  <div class="commentContainer">
    <UserInfo :user-data="user" />
    <button @click="deleteComment">Delete</button>
    <button @click="editComment">Edit</button>
    <div class="text">{{ comment.body }}</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import UserInfo from "@/components/UserInfo.vue";
export default {
  name: "Comment",
  components: {
    UserInfo,
  },
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
  async created() {
    const store = useStore();

    this.user = store.getters.getMemberById(this.comment.userId);
  },
  methods: {
    deleteComment: function () {
      this.$store.dispatch("deleteComment", {
        id: this.comment.id,
        postId: this.comment.postId,
      });
    },
    editComment: function () {
      this.$store.dispatch("openModal", {
        type: "post",
        hasDocumentClose: true,
        hasCloseButton: false,
        payload: {
          body: this.comment.body,
          id: this.comment.id,
          postId: this.comment.postId,
          hideTitle: true,
        },
      });
    },
  },
};
</script>
<style scoped>
.commentContainer {
  width: 80%;
  margin: 0 auto;
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
