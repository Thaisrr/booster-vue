import axios from "axios";

export function useCreateUser() {
    const API = 'http://localhost:3000/users';

    async function create(user) {
        try {
            const res = await axios.post(API, user);
            return res.data;
        } catch (e) {
            console.error(e);
        }
    }

    return {create}

}