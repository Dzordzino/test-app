<template>
  <div class="w-4/5 mt-4 mb-4 ml-auto mr-auto">
    <UserInfo :user-data="user" />
    <div class="w-full text-right">
      <button class="h-8 w-8 cursor-pointer" @click="deleteComment">
        <i class="fas fa-minus text-red"></i>
      </button>
      <button
        class="h-8 w-8 cursor-pointer"
        v-if="loggedUser.username === user.username"
        @click="editComment"
      >
        <i class="far fa-edit ml-3"></i>
      </button>
    </div>

    <div class="mt-1">{{ comment.body }}</div>
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
  computed: {
    loggedUser: function () {
      return this.$store.getters.getUser();
    },
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
