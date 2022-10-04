import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../store/store';


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data
})

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostState {
  loading: boolean;
  error: string | null;
  entities: Post[];
}

const initialState = {
  loading: false,
  error: null,
  entities: [],
} as PostState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd(state, action) {
      state.entities.push(action.payload);
    },
    postEdit(state, action) {
      const { id, title, body } = action.payload;
      const selectedPost = state.entities.find((post) => post.id === id);
      if (selectedPost) {
        selectedPost.title = title;
        selectedPost.body = body;
      }
    },
    postDelete(state, action) {
      const { id } = action.payload;
      state.entities = state.entities.filter(post => post.id !== id)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
      state.entities = action.payload
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users.entities;

export const { postAdd, postEdit, postDelete } = postsSlice.actions;

export default postsSlice.reducer