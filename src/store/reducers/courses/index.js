import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "../../../axios";
import API from "../../../api";

export const getAllCourses = createAsyncThunk(
  "courses/getCourses",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(API.courses);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const postCourse = createAsyncThunk(
  "courses/postCourse",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API.courses, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(API.courses + payload.courseId);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(API.courses + payload.courseId);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const postVideo = createAsyncThunk(
  "courses/postVideo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API.videos, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteVideo = createAsyncThunk(
  "courses/deleteVideo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(API.videos + payload.videoId);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const courseSlice = createSlice({
  name: "courses",
  initialState: {
    coursesData: {},
    courseDetail: {}
  },
  reducers: {
    // handleLogout(state, action) {
    //   state.userData = {};
    //   state.isAuthenticated = false;
    //   userStorage.removeLocalStorage()
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.coursesData = action.payload;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.courseDetail = action.payload;
      })
  },
});

// export const {
//   handleLogout,
// } = authSlice.actions;
export default courseSlice.reducer;
