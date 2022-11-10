<template>
  <div class="postModal">
    <Input
      v-if="!payload.hideTitle"
      input-type="input"
      @textUpdated="updateTitle"
      :previous-text="payload.title ? payload.title : ''"
    />
    <Input
      input-type="textarea"
      @textUpdated="updateText"
      :previous-text="payload.body ? payload.body : ''"
    />
    <button v-if="payload.body" @click="editPost">Edit</button>
    <button v-else @click="sendPost">Post</button>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: "PostModal",
  components: {
    Input,
  },
  props: {
    payload: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      text: "",
      title: "",
    };
  },
  methods: {
    updateText: function (text) {
      this.text = text;
    },
    updateTitle: function (text) {
      this.title = text;
    },
    sendPost: function () {
      const userId = this.$store.getters.getUserId();
      this.$store.dispatch("sendPost", {
        id: userId,
        title: this.title,
        body: this.text,
      });
    },
    editPost: function () {
      const userId = this.$store.getters.getUserId();
      if (this.payload.hideTitle) {
        this.$store.dispatch("editComment", {
          id: this.payload.id,
          postId: this.payload.postId,
          body: this.text,
        });
      } else {
        this.$store.dispatch("editPost", {
          id: this.payload.id,
          title: this.title,
          body: this.text,
          userId,
        });
      }
    },
  },
};
</script>
<style scoped>
.postModal {
  width: 100%;
  max-width: 500px;
  background: #fff;
}
</style>
