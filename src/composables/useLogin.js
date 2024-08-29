import axios from "axios";
import {useAuth} from "@/store/auth";

export const useLogin = () => {
    const {setIsLogged, setLogout} = useAuth();

    async function connexion(login) {
        // login :{ email / username, password }
        try {
            const res = await axios.post('https://reqres.in/api/login', login);
            const token = res.data.token;
            setIsLogged();
            localStorage.setItem('token', token);
        } catch (e) {
            alert( e.response.data.error)
        }
    }

    function logout() {
        setLogout();
        localStorage.clear();
    }

    return {logout, connexion}
}
