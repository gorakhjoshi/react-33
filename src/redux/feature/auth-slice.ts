import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  email: string | null;
  token: string | null;
}

const initialState: IAuthState = {
  email: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ token: string; email: string }>
    ) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        })
      );

      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
