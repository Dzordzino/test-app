import uiActions from "./actions";
import uiGetters from "./getters";
import uiMutations from "./mutations";

const UI = {
  state: () => ({
    modal: {
      isOpen: false,
      className: "",
      hasDocumentClose: true,
      hasCloseButton: true,
      type: "",
      payload: "",
    },
  }),
  mutations: uiMutations,
  actions: uiActions,
  getters: uiGetters,
};

export default UI;
