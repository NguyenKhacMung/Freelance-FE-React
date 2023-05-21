import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../axios";
import API from "../../../api";
import { userStorage } from "../../../storage";

export const handleLogin = createAsyncThunk(
  "users/handlecLogin",
  async (payload, thunkAPI) => {
    const { username, password } = payload;
    try {
      const response = await axios.post(API.user.login, {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const handleRegister = createAsyncThunk(
  "users/handleRegister",
  async (payload, thunkAPI) => {
    const { username, password, email, role } = payload;
    try {
      const response = await axios.post(API.user.register, {
        username, password, email, role
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const handleUpdateUser = createAsyncThunk(
  "users/handleUpdateUser",
  async (payload, thunkAPI) => {
    const { username, email, } = payload;
    try {
      const response = await axios.post(API.user.updateUser, { username, email });
      return { username, email }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const handleChangePassword = createAsyncThunk(
  "users/handleChangePassword",
  async (payload, thunkAPI) => {
    const { oldPass, newPass, id } = payload;
    try {
      const response = await axios.post(API.user.changePassword + id, { oldPass, newPass });
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
    errorLogin: null,
    errorChangePassword: null,
  },
  reducers: {
    handleLogout(state, action) {
      state.userData = {};
      state.isAuthenticated = false;
      userStorage.removeLocalStorage()
    },
    handleErrorRegister(state, action) {
      state.errorRegister = action.payload
    },
    handleErrorChangePassword(state, action) {
      state.errorChangePassword = action.payload
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
      .addCase(handleLogin.rejected, (state, action) => {
        state.errorLogin = action.payload.response.data.message || action.payload.response.data.error
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.errorRegister = action.payload.response.data.message || action.payload.response.data.error;
      })
      .addCase(handleUpdateUser.fulfilled, (state, action) => {
        state.userData = { ...state.userData, ...action.payload };
      })
      .addCase(handleChangePassword.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.errorChangePassword = null
      })
      .addCase(handleChangePassword.rejected, (state, action) => {
        state.errorChangePassword = 'Old password is incorrect'
      })
  },
});

export const {
  handleLogout,
  handleErrorRegister,
  handleErrorChangePassword,
} = authSlice.actions;
export default authSlice.reducer;
