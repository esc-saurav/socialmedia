import { createSlice } from "@reduxjs/toolkit";

//creating initialstate
const initialState = {
  mode: "light", //for theme
  user: null, //for user
  token: null, //for token
  posts: [], //for posts
};

//creating authenticating slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friend non exist");
      }
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    setPost: (state, action) => {
      const updatedposts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedposts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPost, setPosts } =
  authSlice.actions;
export default authSlice.reducer;
