<template>
  <div>
    <NuxtLink to="/login">Login</NuxtLink>
    <br />
    <NuxtLink to="/documentation">Documentación</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.meta.title); // Inicio
//console.log(process); // My home page
definePageMeta({
  title: "Inicio",
});
</script>

<style lang="scss">
.contenedor-propio {
  background-color: $colorPrimary;
  .text-p1 {
    background-color: blue;
  }
  .text-p2 {
    background-color: green;
  }
  .text-p3 {
    background-color: $colorPrimary;
  }
}
</style>
