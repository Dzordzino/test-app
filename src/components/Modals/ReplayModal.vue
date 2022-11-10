<template>
  <div class="replayModal">
    <UserInfo :user-data="user" />
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.body }}</div>
    <Input input-type="textarea" @textUpdated="updateComment" />
    <button @click="sendReplay">Replay</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Input from "@/components/Input.vue";
import UserInfo from "@/components/UserInfo.vue";
export default {
  name: "ReplayModal",
  components: {
    Input,
    UserInfo,
  },
  props: {
    post: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comment: "",
      user: "",
    };
  },
  created() {
    const store = useStore();
    this.user = store.getters.getMemberById(this.post.userId);
  },
  methods: {
    updateComment: function (text) {
      this.comment = text;
    },
    sendReplay: function () {
      const userId = this.$store.getters.getUserId();
      this.$store.dispatch("postReplay", {
        id: this.post.id,
        comment: this.comment,
        userId,
      });
    },
  },
};
</script>
<style scoped>
.replayModal {
  width: 100%;
  max-width: 500px;
  background: #fff;
}
</style>
