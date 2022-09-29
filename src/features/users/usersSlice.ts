import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../store/store';


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL);
  return response.data
})

type User = {
  id: number;
  name: string;
}

interface PostState {
  loading: boolean;
  error: string | null;
  entities: User[];
}

const initialState = {
  loading: false,
  error: null,
  entities: [],
} as PostState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.entities = action.payload
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users.entities;

export default usersSlice.reducer