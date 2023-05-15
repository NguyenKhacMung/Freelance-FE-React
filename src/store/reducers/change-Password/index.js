import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";
import API from "../../../api";
// import { store } from "../store";

export const handleChangePassword = createAsyncThunk(
  "change/handleChangePassword",
  async (payload, thunkAPI) => {
    const { password, passconfirm } = payload;
    console.log('dhka', payload);
    try {
      const res = await axios
        .post(API.changePassword, {
          Password: password,
          ConfirmPassword: passconfirm,
        });

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const changeSlice = createSlice({
  name: "change",
  initialState: {
    errors: [],
    isValidate: false,
    isFirstLogin: true,
  },
  reducers: {
    handleFirstLogin(state, action) {
      state.isFirstLogin = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleChangePassword.fulfilled, (state, action) => {
        if (action.payload.Succeeded) {
          state.isValidate = action.payload
        }
      })
      .addCase(handleChangePassword.rejected, (state, action) => {
        state.errors = action.payload.data.Errors;
        console.log('data', state.errors);
      });
  },
});

// export const { handleChangePassword } = changeSlice.actions;
export default changeSlice.reducer;
