<script setup>
import BarreNavigation from "@/components/BarreNavigation.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <BarreNavigation />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<style>
main {
  width: 80%;
  margin: auto;
}

</style>