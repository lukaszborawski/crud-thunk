import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data
})

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostState {
  loading: boolean;
  error: boolean;
  data: Post[];
}

const initialState = {
  loading: false,
  error: false,
  data: [],
} as PostState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd(state, action) {
      state.data.push(action.payload);
    },
    postEdit(state, action) {
      const { id, title, body } = action.payload;
      const selectedPost = state.data.find((post) => post.id === id);
      if (selectedPost) {
        selectedPost.title = title;
        selectedPost.body = body;
      }
    },
    postDelete(state, action) {
      const { id } = action.payload;
      state.data = state.data.filter(post => post.id !== id)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.data = action.payload
      })
      .addCase(fetchPosts.rejected, state => {
        state.error = true;
      })
  }
})

export const { postAdd, postEdit, postDelete } = postsSlice.actions;

export default postsSlice.reducer