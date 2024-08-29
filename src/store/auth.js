import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuth = defineStore('auth', () => {
    const isLogged = ref(!!localStorage.getItem('token'));

    function setIsLogged() {
        isLogged.value = true;
    }

    function setLogout() {
        isLogged.value = false;
    }

    return {isLogged, setIsLogged, setLogout}


})