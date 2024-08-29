import {onMounted, ref} from "vue";
import axios from "axios";

export function useUsers() {
    const API = process.env.VUE_APP_API_URL;
    const users = ref(null);
    const error = ref('');
    let token = localStorage.getItem('token') || undefined;
    let headers = {};
    if(token) {
        headers.Authorization = `Bearer ${token}`
    }

    async function load() {
        try {
            const res = await axios.get(API,
                /*{ headers} --- ne fonctionne pas avec Json-server ***/
            );
            users.value = res.data;

            //const res = await fetch(API);
            //users.value = await res.json()

        } catch (e) {
            console.log(e);
            error.value = e.message;
        }
    }
    onMounted(() => {
       load();
    });

    return {users, error, load};
}