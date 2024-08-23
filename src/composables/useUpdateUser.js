import axios from "axios";

export function useUpdateUser() {
    const API = 'http://localhost:3000/users';

    function update(user) {
        try {
            const res = axios.put(API, user);
            return res.data;
        } catch (e) {
            console.log(e)
        }
    }
    return {update}
}