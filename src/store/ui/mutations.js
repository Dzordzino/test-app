const uiMutations = {
  setModalConfig(
    state,
    { isOpen, className, hasDocumentClose, hasCloseButton, type, payload }
  ) {
    state.modal.isOpen = isOpen;
    className && (state.modal.className = className);
    state.modal.hasDocumentClose = hasDocumentClose;
    state.modal.hasCloseButton = hasCloseButton;
    state.modal.type = type;
    payload && (state.modal.payload = payload);
  },
};

export default uiMutations;
