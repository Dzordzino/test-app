<template>
  <div class="header">
    <button @click="createPost">Create Post</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    createPost: function () {
      this.$store.dispatch("openModal", {
        type: "post",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 10px;
}
</style>
