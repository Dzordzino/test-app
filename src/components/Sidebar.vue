<template>
  <div
    class="lg:w-1/6 w-1/4 border-l border-lighter lg:px-6 py-2 flex flex-col justify-between"
  >
    <button
      class="h-12 w-full hover:bg-lightblue rounded-full hover:text-blue text-white bg-blue border-blue border-2"
      @click="createPost"
    >
      Create Post
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    user: function () {
      return this.$store.getters.getUser();
    },
  },
  methods: {
    createPost: function () {
      if (this.user.username) {
        this.$store.dispatch("openModal", {
          type: "post",
          hasDocumentClose: true,
          hasCloseButton: false,
        });
      } else {
        this.$store.dispatch("openModal", {
          type: "login",
          hasDocumentClose: true,
          hasCloseButton: false,
        });
      }
    },
  },
};
</script>
