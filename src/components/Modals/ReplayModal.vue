<template>
  <div class="px-2 lg:px-8 p-4 bg-white rounded-lg">
    <UserInfo :user-data="user" />
    <div class="title">{{ post.title }}</div>
    <div class="text">{{ post.body }}</div>
    <Input
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-8"
      input-type="textarea"
      @textUpdated="updateComment"
      placeholder="Replay"
    />
    <button
      class="h-12 w-40 text-2xl hover:bg-lightblue rounded-full text-blue border-blue border-2 p-1 px-14 flex m-auto text-center"
      @click="sendReplay"
    >
      Replay
    </button>
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
