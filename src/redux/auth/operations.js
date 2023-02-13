import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authTokenHandler = {
  setToken(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },

  clearToken() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userRegisterData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userRegisterData);

      authTokenHandler.setToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userLoginData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userLoginData);

      authTokenHandler.setToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    authTokenHandler.clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    authTokenHandler.setToken(persistedToken);

    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
