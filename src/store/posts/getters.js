const postGetters = {
  getPosts: (state) => () => {
    return state.posts;
  },
  getMembersPosts: (state) => (name) => {
    return state.posts.filter((post) => post.userId === name);
  },
};

export default postGetters;
