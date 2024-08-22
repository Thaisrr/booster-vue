import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state : () => ({counter: 0}),
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        add(numb) {
            this.counter += numb;
        }
    },
    getters: {
        doubleCounter: (state) => state.counter * 2,
    }
});