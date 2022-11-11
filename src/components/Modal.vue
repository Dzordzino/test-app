<template>
  <transition name="fade">
    <div
      v-if="modalData.isOpen"
      @click="close(modalData.hasDocumentClose)"
      class="flex h-screen w-screen bg-black fixed top-0 left-0 right-0 bottom-0 bg-opacity-30"
    >
      <div class="absolute top-1/3 left-1/3 w-1/5" @click.stop>
        <ReplayModal
          v-if="modalData.type === 'replay'"
          :post="modalData.payload"
        />
        <PostModal
          v-else-if="modalData.type === 'post'"
          :payload="modalData.payload"
        />
        <LoginModal v-else-if="modalData.type === 'login'" />
        <SignupModal v-else-if="modalData.type === 'signup'" />
      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import ReplayModal from "@/components/Modals/ReplayModal.vue";
import PostModal from "@/components/Modals/PostModal.vue";
import LoginModal from "@/components/Modals/LoginModal.vue";
import SignupModal from "@/components/Modals/SignupModal.vue";
export default {
  name: "Modal",
  components: {
    ReplayModal,
    PostModal,
    LoginModal,
    SignupModal,
  },
  computed: {
    modalData: function () {
      const store = useStore();
      return store.getters.getModalConfig;
    },
  },
  methods: {
    close: function (shouldClose) {
      shouldClose && this.$store.dispatch("closeModal");
    },
  },
};
</script>
