<script setup>
// eslint-disable-next-line no-undef
defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {
      return {email: 'anonyme@mail.fr', name: 'Anonyme'}
    }
  }
})
</script>

<template>
  <article>
    <h3>{{user.name}}</h3>
    <p>{{user.email}}</p>
  </article>
</template>

<style scoped>

</style>