<script setup>
import CompteurComponent from "@/components/CompteurComponent.vue";
import {ref} from "vue";
import FilterComponent from "@/components/FilterComponent.vue";

let nombreUser = ref(0);
let nombreSession = ref(10);

let filter = ref("Tous");
let order = ref('asc');
</script>

<template>
  <h1>Two Ways Binding</h1>

  <CompteurComponent v-model="nombreSession"/>
  <CompteurComponent v-model="nombreUser" />

  <FilterComponent
    v-model:filter="filter"
    v-model:order="order"
    />

  <p>Vous avez choisi les filtres {{filter}}, trié par {{order}}</p>

</template>

<style scoped>

</style>