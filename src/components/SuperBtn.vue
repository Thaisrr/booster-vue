<script setup>
  defineProps({
    btnClass: {
      type: String,
      validator(value) {
        //return value === 'primary' || value === 'secondary';
        return ['primary', 'secondary'].includes(value)
      }
    },
    action: {
      type: Function,
      required: true,
    }
  })
</script>

<template>
  <button @click="action()" v-bind:class="btnClass">
   --- <slot />---
  </button>
</template>

<style scoped>
.primary {
  background: blue;
  color: white;
}

.secondary {
  background: white;
  color: blue;
}

</style>