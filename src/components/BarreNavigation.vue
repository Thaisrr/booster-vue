<script setup>
import {ref} from "vue";
import {useCounterStore} from "@/store/counter";

const nav = ref(null);
const store = useCounterStore();

function changeColor() {
  if(nav.value) {
    nav.value.style.background = 'yellow';
  }
}

</script>

<template>
  <nav ref="nav">
    <ul>
      <li>
        <router-link to="./">Accueil</router-link>
      </li>
      <li>
          <router-link to="./presentation">Présentation</router-link>
      </li>
      <li>
        <router-link to="./directives">Directives</router-link>
      </li>
      <li>
        <router-link to="./reactivite">Réactivité</router-link>
      </li>
      <li>
        <router-link to="./form">Formulaires</router-link>
      </li>
      <li>
        <router-link to="./computed">Computed</router-link>
      </li>
      <li>
        <router-link to="./parent">Composant Parent</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name: 'router', params: {message: 'Hello World'} }">Router Bis</router-link>
      </li>
      <li>
        <router-link to="./store">Stores</router-link>
      </li>
      <li>
        <router-link to="./binding">Binding</router-link>
      </li>
      <li>
        <router-link to="./life">Lifecycle</router-link>
      </li>
      <li>
        <router-link to="./composable">Composable</router-link>
      </li>
      <li>
        <button @click="changeColor()">Go Yellow !</button>
      </li>
      <li>{{store.counter}}</li>
    </ul>
  </nav>

</template>

<style scoped>
nav {
  width: 100%;
  box-shadow: 2px 2px 5px rgba(169, 169, 169, 0.58);
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
}

ul {
  width: 80%;
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 15px 0;
  margin: 0 auto;
  flex-wrap: wrap;
}

ul a:link, a:visited {
  text-decoration: none;
  padding-bottom: 5px;
  border: solid 1px transparent;
  display: block;
  color: blue;
  transition: color .5s ease;
}

a:hover, a.router-link-active {
  color: crimson;
}



</style>