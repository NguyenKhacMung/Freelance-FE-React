import instance from '../axios';

export const URL = instance.defaults.baseURL
const API = {
  ChatHub: `${URL}/ChatHub`,
  getChatFranchise: `${URL}/api/chats/franchise`,
  getProjectChat: `${URL}/api/chats/projects/`,
  login: `${URL}/api/account/login`,
  changePassword: `${URL}/api/account/change-password`,
  getFranchiseConfigration: `${URL}/api/franchise-configurations/key`,
  updateDateReaded: `${URL}/api/users/key`,
  getAllUser: `${URL}/api/users/franchise`,
  getTask: `${URL}/api/scheduled-tasks/franchise`,
  addTask: `${URL}/api/projecttasks`,
  getProjectTasks: `${URL}/api/scheduled-tasks/projects/`,
  getProjectTasksDetail: `${URL}/api/scheduled-tasks/`,
  getTaskStatus: `${URL}/api/taskworkflows/status/`,
  updateTask: `${URL}/api/scheduled-tasks/contractor/`,
  rejectTask: '/deleteTask',
  getProjects: `${URL}/api/projects/franchise`,
  projectDetail: `${URL}/api/projects/`,
  getContractor: `${URL}/api/contractors`,
  getContacts: `${URL}/api/contacts/franchise`,
  getContactRole: `${URL}/api/contact-roles/franchise`,
  getProducts: `${URL}/api/lineitems/projects/`,
  getFixtures: `${URL}/api/lineitems/franchise`,
  getPackages: `${URL}/api/packages/franchise`,
  getSnags: `${URL}/api/snags/franchise`,
  getSnagsProject: `${URL}/api/snags/projects/`,
  addSnags: `${URL}/api/snags`,
  getSnagsPhotosBySnagId: `${URL}/api/snags-photos/snags/`,
  getSnagsPhotosById: `${URL}/api/snags`,
  addSnagsPhotos: `${URL}/api/snags-photos`,
  getSnagsDetailId: `${URL}/api/snags/`,
  getPhotos: `${URL}/api/photos/projects/`,
  addPhotos: `${URL}/api/photos`,
  getDocument: `${URL}/api/documents/franchise`,
  getDocumentProject: `${URL}/api/documents/projects/`,
  ErrorLogging: `${URL}/api/loggings`
}


export default API; 