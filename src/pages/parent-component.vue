<script setup>
import EnfantComponent from "@/components/EnfantComponent.vue";
import {ref} from "vue";
import CardComponent from "@/components/CardComponent.vue";

const titre = ref('Hello World');
const img = 'https://www.actusf.com/files/new_images/actualit%C3%A9s/hunger.jpeg'
const user1 = {
  name: 'Jean Michel La Tourte',
  email: 'jeanmiche@mail.fr'
}

const users = [
  {id: 1, name: 'Jane DOE', email: 'jdoe@mail.fr'},
  {id: 2, name: 'John Smith', email: 'smith@mail.fr'}
]

</script>

<template>
  <EnfantComponent
      title="Enfant 1"
      v-bind:img-url="img"
      desc="Description de enfant 1"
  />
  <EnfantComponent
      title="Enfant 2"
      v-bind:img-url="img"
      desc="aaa"
  />
  <EnfantComponent v-bind:title="titre"  v-bind:img-url="img"/>
  <EnfantComponent title="Bonjour le monde"  v-bind:img-url="img"/>

  <CardComponent v-bind:user="user1" />

  <CardComponent v-for="u of users" :key="u.id" v-bind:user="u" />

</template>

<style scoped>

</style>