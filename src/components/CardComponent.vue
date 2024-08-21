<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {
      return {email: 'anonyme@mail.fr', name: 'Anonyme'}
    }
  }
});

console.log(props.user);

</script>

<template>
  <article>
    <h3>{{user.name}}</h3>
    <p>{{user.email}}</p>
    <button @click="$emit('remove', user)">Supprimer</button>
  </article>
</template>

<style scoped>

</style>