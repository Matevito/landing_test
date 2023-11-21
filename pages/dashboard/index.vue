<template>
  <section class="dashboard"></section>
</template>

<script setup>
useHead({
  title: "Dashboard",
});
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});
</script>
