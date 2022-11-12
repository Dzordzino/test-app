const memberMutations = {
  setMembers(state, members) {
    state.members = members;
  },
  loginUser(state, user) {
    const memberUser = state.members.find(
      (member) => member.username === user.username
    );
    const memberIndex = state.members.indexOf(
      state.members.find((member) => member.username === user.username)
    );

    if (memberUser) {
      !memberUser.password && (memberUser.password = user.password);

      if (memberUser.password === user.password) {
        state.user = memberUser;
        state.members[memberIndex].password = user.password;
      } else {
        throw new Error("Invalid username or password");
      }
    } else {
      throw new Error("Invalid username or password");
    }
  },
  logoutUser(state) {
    state.user = {};
    sessionStorage.removeItem("user");
  },
  signupUser(state, user) {
    state.members.push(user);
    state.user = user;
  },
  followUser(state, data) {
    const memberIndex = state.members.indexOf(
      state.members.find((member) => member.id === data.id)
    );
    state.members[memberIndex].following = data.following;
  },
  setLoggedUser(state, username) {
    const user = state.members.find((member) => member.username === username);
    state.user = user;
  },
};

export default memberMutations;
