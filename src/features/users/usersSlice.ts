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

interface UserState {
  loading: boolean;
  error: string | null;
  entities: User[];
}

const initialState = {
  loading: false,
  error: null,
  entities: [],
} as UserState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdd(state, action) {
      state.entities.push(action.payload);
    },
    userEdit(state, action) {
      const { id, name } = action.payload;
      const selectedUser = state.entities.find((user) => user.id === id);
      if (selectedUser) {
        selectedUser.name = name;
      }
    },
    userDelete(state, action) {
      const { id } = action.payload;
      state.entities = state.entities.filter(user => user.id !== id)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.entities = action.payload
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users.entities;

export const { userAdd, userEdit, userDelete } = usersSlice.actions;

export default usersSlice.reducer