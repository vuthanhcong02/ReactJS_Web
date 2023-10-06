import {createContext,useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from '../api/axiosClient';

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState({});
    const csrf =() => axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const login = async ({email,password}) =>{
        await csrf();
        try {
            const response = await axios.post('/admin/login',{email,password});
            setUser(response.data.user);
        }
        catch (error){
            console.error('Login failed', error);
        }
    }
    return <AuthContext.Provider value={{user,login}}>
                {children}
            </AuthContext.Provider>;
};
export default function useAuthContext(){
    return useContext(AuthContext);
}