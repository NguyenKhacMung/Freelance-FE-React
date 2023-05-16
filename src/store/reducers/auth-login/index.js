import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../axios";
import API from "../../../api";
import { userStorage } from "../../../storage";

export const handleLogin = createAsyncThunk(
  "users/handleLogin",
  async (payload, thunkAPI) => {
    const { username, password } = payload;
    try {
      // const response = await axios.post(API.login, {
      //   username,
      //   password,
      // });
      // return response.data;
      return { username, password };
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const getAllUser = createAsyncThunk(
  "users/getUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(API.getAllUser);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const user = JSON.parse(userStorage.getLocalStorage())

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: user || {},
    isAuthenticated: user ? true : false,
  },
  reducers: {
    handleLogout(state, action) {
      state.userData = {};
      state.isAuthenticated = false;
      userStorage.removeLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(handleLogin.pending, (state, action) => {
      //   if (action.payload) {
      //     state.isLoading = true;
      //   }
      // })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isAuthenticated = true;
        userStorage.setLocalStorage(action.payload)
      })
  },
});

export const {
  handleLogout,
} = authSlice.actions;
export default authSlice.reducer;
