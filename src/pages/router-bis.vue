<script setup>
// import {useRoute} from "vue-router";
/*
const route = useRoute();
const message = route.params.message;
*/

import {useRouter} from "vue-router";
import {Field, Form} from "vee-validate";

defineProps(['message']);

const router = useRouter();

function redirect(values) {
  console.log(values);
  router.push('/');
}

const color = '#00FF00';

</script>

<template>
<p>Message passé en paramètre : {{message}}</p>

  <Form @submit="redirect">
    <Field placeholder="Login" name="login" />
    <button>Save</button>
  </Form>

  <p class="dynamikColor">Ma couleur est gérée dans le script</p>



</template>

<style scoped>
.dynamikColor {
  font-size: 30px;
  background: v-bind(color);
}
</style>