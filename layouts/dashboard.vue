<template>
  <div>
    <header></header>

    <footer>José pedraza - {{ currentYear }}</footer>
  </div>
</template>

<script setup>
const authToken = useCookie("authToken");

onMounted(() => {
  resetAuthCookieExpiration(authToken.value);
});
//const res = await resetAuthCookieExpiration();
</script>
