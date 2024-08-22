<script setup>
import {defineModel} from "vue";
const counter = defineModel();

function increment() {
  counter.value++;
}
</script>

<template>
  <p>Compteur : {{counter}}</p>
  <p>
    <button @click="increment()">+</button>
  </p>
</template>

<style scoped>

</style>