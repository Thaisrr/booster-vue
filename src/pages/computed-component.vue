<script setup>
import {computed, ref, watch} from "vue";

const firstname = ref('Jean Michel');
const lastname = ref('La Tourte');
const date = new Date();
const fruits = ['pomme', 'poire', 'abricot'];
const search = ref('');

const filteredArray = computed(() => {
  return fruits.filter(f => f.includes(search.value));
})

const fullname = computed(() => {
  console.log('in computed')
  return `${firstname.value} ${lastname.value}`;
});

const today = computed(() => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
});

function getFullName() {
  console.log('in get full name')
  return `${firstname.value} ${lastname.value}`;
}

watch(firstname, (newValue, oldValue) => {
  console.log('Firstname a été modifié', newValue, oldValue);
});


</script>

<template>
  <h1>Les Computed et Watchers</h1>

  <input v-model="firstname" />

  <p>Bonjour {{ firstname }} {{ lastname }}</p>
  <p>Bonjour {{ fullname}}</p>
  <p>Bonjour {{getFullName() }}</p>
  <p>Nous sommes le {{ today }}</p>

  <input v-model="search" />
  <ul>
    <li v-for="f in filteredArray" :key="f">{{f}}</li>
  </ul>
</template>

<style scoped>

</style>