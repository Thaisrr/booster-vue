<script setup>
const name = 'Toto';
const bool = true;
const maClasse = "toto";
</script>

<template>
  <h1>Présentation</h1>
  <section>
    <h2>Interpolation</h2>

    <p>1 + 1 = {{ 1 + 1 }}</p>
    <p>Vous vous appelez {{ name }}</p>
    <p>{{name.toUpperCase()}}</p>
    <p>Boolean :{{bool}}</p>
    <p>{{bool ? "C'est vrai !" : "C'est faux !"}}</p>
  </section>
 <section>
   <h2>Data Binding</h2>

   <!-- Valable pour tous les attributs HTML -->
   <p class="toto">Classe = "toto"</p>
   <p v-bind:class="maClasse">Classe = aussi "toto", mais via la variable "maClasse"</p>
   <p v-bind:class="bool ? 'green' : 'red' ">Classe dynamique grâce au ternaire</p>
   <!-- Si le bool est true, la classe sera "green", sinon la classe sera "red" -->
 </section>
  <section>
    <h2>Le style dynamique</h2>

    <p v-bind:style="{backgroundColor: 'aliceblue', fontSize : '20px'}">On peut passer du style dynamiquement </p>

  </section>

</template>

<!-- scoped permet de bloquer le CSS à ce composant -->
<style scoped>
.green  {
  color: green;
}

.red {
  color: red;
}
</style>