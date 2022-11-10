<template>
  <Modal />
  <Header />
  <Sidebar />
  <div class="mainContainer">
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Modal,
  },
  async created() {
    const store = useStore();

    await store.dispatch("fetchMembers");
    await store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
</style>
