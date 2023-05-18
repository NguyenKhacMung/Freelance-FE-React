import { combineReducers } from 'redux';
import authSliceReducer from './auth';
import courseSliceReducer from './courses';

const rootReducer = combineReducers({
  auth: authSliceReducer,
  courses: courseSliceReducer
});

export default rootReducer
export * from './auth'