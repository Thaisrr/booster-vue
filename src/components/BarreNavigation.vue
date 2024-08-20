<script setup>

</script>

<template>
  <nav>
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
    </ul>
  </nav>

</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>