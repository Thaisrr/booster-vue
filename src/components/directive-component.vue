<script setup>
  import {ref} from "vue";

  const isLogged = ref(false);

  function login() {
    isLogged.value = !isLogged.value;
  }

  const role = 'ADMIN'; // USER, ADMIN, MODO

  const fruits = ref(['pêche', 'pomme', 'fraise', 'framboise']);

</script>

<template>
  <h1>Les Directives</h1>

  <section>
    <h2>Affichage conditionnel</h2>
    <p>Vous êtes {{isLogged ? 'Connecté.e' : 'Anonyme'}}</p>
    <button @click="login()">login / logout</button>

    <p v-show="isLogged">Vous êtes connecté.e, c'est super !</p>

    <div v-show="isLogged">
      <p>Une div plus complexe affichée uniquement si l'user est logged</p>
    </div>

    <h3>Le v-if</h3>
    <p v-if="role === 'ADMIN'">Vous êtes admin !</p>
    <p v-else-if="role === 'MODO'">Vous êtes modo</p>
    <p v-else>Vous êtes simple user</p>
  </section>

  <section>
    <h2>Les boucles</h2>

    <ul>
      <li v-for="f in fruits" v-bind:key="f">{{f}}</li>
    </ul>
  </section>
</template>

<style scoped>

</style>