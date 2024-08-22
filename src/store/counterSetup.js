import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterSetupStore = defineStore('counterSetup', () => {
   const counter = ref(0);

   function increment() {
       counter.value++;
   }

   function decrement() {
       counter.value--;
   }

   const doubleCounter = computed(() => counter.value * 2)

   return {counter, increment, decrement, doubleCounter}
});

