<script setup>
  import {useUsers} from "@/composables/useUsers";

  const {users, error, load} = useUsers();

</script>

<template>
  <p v-if="!users && !error">En cours de chargement</p>
  <ul v-else-if="users?.length">
    <li v-for="u in users" :key="u.id">{{u.name}}</li>
  </ul>
  <p v-else>Erreur : {{error}}</p>

  <button @click="load()">Retry</button>
</template>

<style scoped>

</style>