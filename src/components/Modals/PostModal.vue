<template>
  <div class="px-4 lg:px-6 p-4 bg-white rounded-lg">
    <p class="text-3xl text-center m-6">Post Comment</p>
    <Input
      v-if="!payload.hideTitle"
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-4"
      input-type="input"
      @textUpdated="updateTitle"
      :previous-text="payload.title ? payload.title : ''"
      placeholder="Post Title"
    />
    <Input
      input-type="textarea"
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-8"
      @textUpdated="updateText"
      :previous-text="payload.body ? payload.body : ''"
      placeholder="Text"
    />
    <button
      v-if="payload.body"
      class="h-12 w-40 text-2xl hover:bg-lightblue rounded-full text-blue border-blue border-2 p-1 px-12 flex m-auto text-center"
      @click="editPost"
    >
      Edit
    </button>
    <button
      v-else
      class="h-12 w-40 text-2xl hover:bg-lightblue rounded-full text-blue border-blue border-2 p-1 px-12 flex m-auto text-center"
      @click="sendPost"
    >
      Post
    </button>
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
