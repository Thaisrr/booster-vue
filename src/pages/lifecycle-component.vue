<script setup>
import {onBeforeMount, onMounted, onUnmounted, onUpdated, ref} from "vue";
const a = ref('variable a')

function onUpdate() {
  console.log('fenêtre redimensionnée')
}

onBeforeMount(() => {
  console.log('--- le composant va être monté', a)
})
onMounted(() => {
  console.log('---- le composant est pret', a);
  window.addEventListener('resize', onUpdate)
});

onUpdated(() => {
  console.log('le composant a été mis à jour', a)
})

onUnmounted(() => {
  console.log('----le composant est démonté', a);
  window.removeEventListener('resize', onUpdate);
})


</script>

<template>
  <h1>Le Cycle de vie de Vue</h1>
  <input v-model="a" />
  <p>Variable a : {{a}}</p>
</template>

<style scoped>

</style>