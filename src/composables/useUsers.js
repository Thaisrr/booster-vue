import {onMounted, ref} from "vue";
import axios from "axios";

export function useUsers() {
    const API = process.env.VUE_APP_API_URL;
    const users = ref(null);
    const error = ref('');
    async function load() {
        try {
            const res = await axios.get(API);
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