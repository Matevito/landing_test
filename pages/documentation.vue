<template>
  <main>
    <NuxtLink to="/">Home</NuxtLink>
    <ContentDoc path="/" />
  </main>
</template>

<script setup>
const route = useRoute();
console.log(route.meta.title); // Documentacion
definePageMeta({
  //layout: "default",
  title: "Documentación",
});
</script>
