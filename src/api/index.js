import instance from '../axios';

export const URL = instance.defaults.baseURL
const API = {
  user: {
    login: `${URL}/api/auth/signin/`,
    register: `${URL}/api/auth/signup/`,
  },
  courses: `${URL}/api/v1/courses/`,
  videos:`${URL}/api/v1/videos/`,
}


export default API; 