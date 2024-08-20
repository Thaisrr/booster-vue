<script setup>
import {reactive, ref} from "vue";

  /**** Ref *****/

  let isLogged = ref(false);
  let name = ref('toto');

  function setLogged() {
    isLogged.value = !isLogged.value; // passer de true à false et vice versa
    console.log('is logged ? ', isLogged.value);
  }

  function changeName() {
    name.value = 'titi';
    console.log(name.value);
  }


  /***** Reactive *****/
  const state = reactive({
    firstname: 'Jean Michel',
  });

  function changeFirstname() {
    state.firstname = 'Jean Micheline';
    console.log(state.firstname)
  }

</script>

<template>
  <p v-bind:class="isLogged ? 'green' : 'red'">Est connecté: {{isLogged}}</p>
  <p>
    <button @click="setLogged()">
      {{isLogged ? 'Déconnexion' : 'Connexion'}}
    </button>
  </p>
  <p>Nom : {{name}}</p>
  <p>
    <button @click="changeName()">Changer le nom</button>
  </p>
  <p>Prénom : {{state.firstname}}</p>
  <button @click="changeFirstname()">Changer prénom</button>

</template>

<style scoped>
.green {color: green;}
.red {color: red;}
</style>