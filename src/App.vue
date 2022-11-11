<template>
  <Modal />
  <Header />
  <div class="flex container h-screen w-full justify-end">
    <div
      class="lg:w-3/4 px-2 lg:px-36 py-2 flex flex-col justify-between items-center"
    >
      <router-view />
    </div>
    <Sidebar />
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
