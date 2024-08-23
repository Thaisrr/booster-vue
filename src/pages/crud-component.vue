<script setup>
import {Field, Form} from "vee-validate";
import {useCreateUser} from "@/composables/useCreateUser";
import {useUsers} from "@/composables/useUsers";
import {useDeleteUser} from "@/composables/useDeleteUser";

const {create} = useCreateUser();
const {users, load} = useUsers();
const {remove} = useDeleteUser();
async function handleRemove(id) {
  await remove(id);
  load();
}

async function handleCreate(user) {
  await create(user);
  load();
}
</script>

<template>
  <h1>Crud User</h1>

  <h2>Créer</h2>
  <Form @submit="handleCreate">
    <Field name="username" placeholder="username"/>
    <Field name="email" placeholder="email" />
    <button>Save</button>
  </Form>

  <h2>Lire</h2>
  <ul v-if="users">
    <li v-for="u in users" :key="u.id">
      {{u.username}}
      <button @click="handleRemove(u.id)">Delete</button>
    </li>
  </ul>

</template>

<style scoped>

</style>