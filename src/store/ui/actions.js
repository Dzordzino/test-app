const uiActions = {
  openModal(
    { commit },
    { className, hasDocumentClose, hasCloseButton, type, payload }
  ) {
    commit("setModalConfig", {
      isOpen: true,
      className,
      hasDocumentClose,
      hasCloseButton,
      type,
      payload,
    });
  },
  closeModal({ commit }) {
    commit("setModalConfig", {
      isOpen: false,
      className: "",
      hasDocumentClose: true,
      hasCloseButton: true,
      type: "",
      payload: "",
    });
  },
};

export default uiActions;
