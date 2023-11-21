<template>
  <div>
    <!-- <header></header>
    <main id="layout-login">
      <div id="logo"></div>
    </main> -->
    <slot />
    <!-- <footer>José pedraza - {{ currentYear }}</footer> -->
  </div>
</template>

<script setup>
const { locale } = useI18n();
const config = useRuntimeConfig();
const currentYear = new Date().getUTCFullYear();
const API = config.public.API_BASE_URL;
console.log(API);
</script>
