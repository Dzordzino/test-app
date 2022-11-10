const memberGetters = {
  getMembers: (state) => () => {
    return state.members;
  },
  getMemberById: (state) => (id) => {
    return state.members.filter((member) => member.id === id)[0];
  },
  getMemberByName: (state) => (name) => {
    return state.members.filter((member) => member.username === name)[0];
  },
};

export default memberGetters;
