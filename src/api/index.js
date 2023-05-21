import instance from '../axios';

export const URL = instance.defaults.baseURL
const API = {
  user: {
    login: `${URL}/api/auth/signin/`,
    register: `${URL}/api/auth/signup/`,
    updateUser: `${URL}/api/auth/information/`,
    changePassword: `${URL}/api/auth/change-password/`,
  },
  courses: `${URL}/api/v1/courses/`,
  videos: `${URL}/api/v1/videos/`,
  comments: `${URL}/api/v1/comments/course/`,
  searchCourses: `${URL}/api/v1/courses/search`,
}


export default API; 