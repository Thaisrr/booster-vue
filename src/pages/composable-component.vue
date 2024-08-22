<script setup>
  import {useMouseTracker} from "@/composables/mouseTracker";

  //const coordonnates = useMouseTracker();
  const {x, y} = useMouseTracker();
</script>

<template>
  <p>Mouse is at {{x}} {{y}}</p>
</template>

<style scoped>

</style>