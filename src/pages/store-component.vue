<script setup>
import {useCounterStore} from "@/store/counter";
import {useCounterSetupStore} from "@/store/counterSetup";
import {storeToRefs} from "pinia";
// récupère l'objet créé dans state
const store = useCounterStore();

const storeSetup = useCounterSetupStore();

const {increment, decrement} = storeSetup;
const {counter, doubleCounter} = storeToRefs(storeSetup);


</script>

<template>
  <h1>Les Stores ( Pinia )</h1>
  <p>Compteur: {{store.counter}}</p>
  <p>Compteur doublé : {{store.doubleCounter}}</p>
  <button @click="store.increment()">+</button>
  <button @click="store.decrement()">-</button>
  <button @click="store.add(2)">Add 2</button>
  <button @click="store.add(4)">Add 4</button>

  <p>Compteur setup: {{counter}}</p>
  <p>Double compteur setup: {{doubleCounter}}</p>
  <button @click="increment()">+</button>
  <button @click="decrement()">-</button>
</template>

<style scoped>

</style>