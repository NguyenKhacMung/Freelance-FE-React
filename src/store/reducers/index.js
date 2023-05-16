import { combineReducers } from 'redux';
import authSliceReducer from './auth-login';
import changePasswordReducer from './change-Password';

const rootReducer = combineReducers({
  changePassword: changePasswordReducer,
  auth: authSliceReducer,
});

export default rootReducer
export * from './auth-login'