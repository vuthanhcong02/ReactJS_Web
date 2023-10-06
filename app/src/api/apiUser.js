import axios from './axiosClient'
const UserApi = {
    getAll : (params) => {
    const url = '/admin/users';
    return axios.get(url, { 
     });
    },
    add : (data) => {
        const url = '/admin/users';
        return axios.post(url, data);
    }
}
export default UserApi;