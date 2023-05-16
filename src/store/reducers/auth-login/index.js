import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../axios";
import API from "../../../api";

export const handleLogin = createAsyncThunk(
  "users/handleLogin",
  async (payload, thunkAPI) => {
    const { username, password } = payload;
    try {
      const response = await axios.post(API.login, {
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

export const updateFranchiseConfig = createAsyncThunk(
  "users/updateFranchiseConfig",
  async (payload, thunkAPI) => {
    const { userId, key } = payload
    var bodyFormData = new FormData()
    bodyFormData.append('UserId', userId)
    bodyFormData.append('Key', key)
    try {
      const response = await axios.put(API.updateDateReaded,
        bodyFormData
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: [],
    infoTC: [],
    infoHS: [],
    userId: undefined,
    token: null,
    isError: false,
    isFetching: false,
    isSuccess: false,
    isFirstLogin: true,
    isReject: false,
    isReadHandS: false,
    isReadTandC: false,
    isSuccessTandC: false,
    updateConfigInfo: [],
    isValidate: [],
  },
  reducers: {
    handleLogout(state, action) {
      state.userInfo = null;
      state.token = null;
      state.isError = false
    },
    handleReadHandS(state, action) {
      state.isReadHandS = true
    },
    handleReject(state, action) {
      state.userInfo = null;
      state.token = null;
      state.isReject = true
    },
    handleAccept(state, action) {
      state.isReadTandC = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state, action) => {
        if (action.payload) {
          state.isFetching = true;
        }
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.userInfo = action.payload.Data;
        state.token = state.userInfo[0].JWToken
        state.userId = state.userInfo[0].Id
        state.isSuccess = true;
        state.isFirstLogin = state.userInfo[0].ResetPassword
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.isError = true;
        state.isValidate = action.payload.data.Errors;
      })
      .addCase(updateFranchiseConfig.fulfilled, (state, action) => {
        state.updateConfigInfo = action.payload.Data;
      })
  },
});

export const {
  handleAccept,
  handleReject,
  handleLogout,
  handleReadHandS
} = authSlice.actions;
export default authSlice.reducer;
