<template>
  <div class="header">
    <Input input-type="input" @textUpdated="serchUsers" />
    <button @click="createPost">Create Post</button>
    <ul class="list">
      <li v-for="user in users" :key="user.id">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: "Header",
  components: {
    Input,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    createPost: function () {
      this.$store.dispatch("openModal", {
        type: "post",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
    serchUsers: function (text) {
      const regex = new RegExp(`[a-zA-Z]*${text}[a-zA-Z]*`),
        allUsers = this.$store.getters.getMembers();

      if (text) {
        this.users = allUsers.filter((item) =>
          regex.test(item.username.toLowerCase())
        );
      } else {
        this.users = "";
      }
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
.list {
  display: block;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 0 20px;
  text-align: center;
  list-style: none;
}
</style>
