<script setup>
import {ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";

let name = ref('');

let login = ref({
  email: '',
  password: ''
});

let emailError = ref(false);

function save() {
  console.log(login.value);
}

function checkEmail() {
  if(!login.value.email || login.value.email.length < 3) {
    emailError.value = true;
  } else {
    emailError.value = false;
  }
}

function handleVeeForm(value) {
  console.log(value);
}

function checkEmail2(value) {
  if(!value || value.length < 3) {
    return 'Email incorrect'; // En cas d'erreur, je retourne une string
  }
  return true; // si tout va bien, je retourne true
}

</script>

<template>
  <h1>Les Formulaires</h1>

  <h2>Présentation : </h2>
  <input v-model="name" />
  <p>Votre nom est : {{ name }}</p>

  <h2>Formulaire : </h2>

  <form novalidate @submit.prevent="save()">
    <p>
      <label>Email</label>
      <input type="email" v-model="login.email" @blur="checkEmail()">
      <small v-show="emailError">Veuillez entrer un email valide</small>
    </p>
    <p>
      <label>Password</label>
      <input type="password" v-model="login.password">
    </p>
    <button>Connexion</button>
  </form>

  <h2>Vee-Validate</h2>

  <Form @submit="handleVeeForm">
    <p>
      <label>Email</label>
      <Field name="email" type="email" v-bind:rules="checkEmail2" />
      <ErrorMessage name="email" />
    </p>
    <p>
      <label>Password</label>
      <Field name="password" type="password" />
    </p>
    <p>
      <label>Nom</label>
      <Field name="name" type="text" />
    </p>
    <button>Login</button>
  </Form>


</template>

<style scoped>

</style>