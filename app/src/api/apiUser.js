import axios from './axiosClient'
const UserApi = {
    getAll : (params) => {
    const url = '/admin/users';
    return axios.get(url, { params });
    },
}
export default UserApi;