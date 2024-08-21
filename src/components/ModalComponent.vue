<script setup>

</script>

<template>
  <section>
    <div class="header"><slot name="header" /> <button>X</button></div>
    <div class="main">
      <slot name="main" />
    </div>
    <div class="footer">
      <button><slot name="btn" /></button>
    </div>


  </section>
</template>

<style scoped>
section {
  width: 500px;
  border: solid;
}
</style>