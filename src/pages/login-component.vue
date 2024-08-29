<script setup>
import {Field, Form} from "vee-validate";
import {useLogin} from "@/composables/useLogin";

const {connexion} = useLogin();
function onSubmit(login) {
  connexion(login);
}

</script>

<template>
  <h1>Login</h1>

  <Form @submit="onSubmit">
    <Field name="email" placeholder="email" />
    <Field name="password" placeholder="password" />
    <button>Login</button>
  </Form>
</template>

<style scoped>

</style>