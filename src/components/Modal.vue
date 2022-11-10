<template>
  <transition name="fade">
    <div
      v-if="modalData.isOpen"
      @click="close(modalData.hasDocumentClose)"
      class="modalContainer"
    >
      <div class="modalContent" @click.stop>
        <ReplayModal
          v-if="modalData.type === 'replay'"
          :post="modalData.payload"
        />
        <PostModal
          v-if="modalData.type === 'post'"
          :payload="modalData.payload"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import ReplayModal from "@/components/Modals/ReplayModal.vue";
import PostModal from "@/components/Modals/PostModal.vue";
export default {
  name: "Modal",
  components: {
    ReplayModal,
    PostModal,
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

<style scoped>
.modalContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}

.modalContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
