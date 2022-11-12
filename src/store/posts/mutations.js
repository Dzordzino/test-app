const postMutations = {
  setPosts(state, posts) {
    state.posts = posts.reverse();
  },
  setPostComments(state, payload) {
    state.posts.find((post) => post.id === payload.id).comments =
      payload.comments;
  },
  setPostUser(state, payload) {
    state.posts.find((post) => post.id === payload.id).user =
      payload.user.username;
  },
  setNewComment(state, payload) {
    state.posts
      .find((post) => Number(post.id) === Number(payload.id))
      .comments.push(payload.comment);
  },
  setNewPost(state, post) {
    state.posts.unshift(post);
  },
  deletePost(state, postId) {
    const index = state.posts.indexOf(
      state.posts.find((post) => post.id === postId)
    );
    state.posts.splice(index, 1);
  },
  editPost(state, { id, title, body }) {
    const index = state.posts.indexOf(
      state.posts.find((post) => post.id === id)
    );
    state.posts[index].title = title;
    state.posts[index].body = body;
  },
  deleteComment(state, { id, postId }) {
    const postIndex = state.posts.indexOf(
      state.posts.find((post) => {
        return Number(post.id) === Number(postId);
      })
    );
    const commentPost = state.posts[postIndex];
    const index = commentPost.comments.indexOf(
      commentPost.comments.find((comment) => comment.id === id)
    );
    state.posts[postIndex].comments.splice(index, 1);
  },
  editComment(state, { id, postId, body }) {
    const commentPost = state.posts.find(
      (post) => Number(post.id) === Number(postId)
    );
    const index = commentPost.comments.indexOf(
      commentPost.comments.find((comment) => comment.id === id)
    );
    commentPost.comments[index].body = body;
  },
};

export default postMutations;
