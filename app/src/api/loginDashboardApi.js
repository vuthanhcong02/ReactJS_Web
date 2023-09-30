import axiosClient from './axiosClient';
const loginDashboardApi  = {
    login : (params) => {
        const url = '/admin/login';
        return axiosClient.post(url);
        },
    }
export default loginDashboardApi;