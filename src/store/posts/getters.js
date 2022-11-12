const postGetters = {
  getPosts: (state) => () => {
    return state.posts;
  },
  getMembersPosts: (state) => (name) => {
    return state.posts.filter((post) => post.userId === name);
  },
  getCanDelete:
    (state) =>
    ({ userId, postId }) => {
      const post = state.posts.filter((post) => post.id === postId);
      return post.userId === userId;
    },
};

export default postGetters;
