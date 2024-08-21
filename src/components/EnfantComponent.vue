<script setup>
import {defineProps} from "vue"; // ne s'importe plus, mais pb es-lint
defineProps({
  title: String,
  imgUrl: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    default: 'Une super description',
    validator(value) {
      return value.length > 10
    }
  }
});
</script>

<template>
    <article>
      <img v-bind:src="imgUrl" />
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
    </article>
</template>

<style scoped>
img {
  width: 200px;
}
</style>