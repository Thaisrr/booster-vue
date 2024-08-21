<script setup>
const emit = defineEmits(['remove']);
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {
      return {email: 'anonyme@mail.fr', name: 'Anonyme'}
    }
  }
});

function handleRemove() {
  emit('remove', props.user);
}

console.log(props.user);

</script>

<template>
  <article>
    <h3>{{user.name}}</h3>
    <p>{{user.email}}</p>
    <button @click="handleRemove()">Supprimer</button>
  </article>
</template>

<style scoped>

</style>