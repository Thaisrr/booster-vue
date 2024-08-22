<script setup>
import {defineModel} from "vue";
const order = defineModel('order');
const filter = defineModel('filter');
</script>

<template>
  <div>
    <select v-model="order">
      <option value="asc">Asc</option>
      <option value="desc">Desc</option>
    </select>
    <input v-model="filter">
  </div>
</template>

<style scoped>

</style>