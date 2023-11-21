<template>
  <NuxtLayout></NuxtLayout>
  <section class="profile">
    <div v-if="user">
      {{ user }}
    </div>
    <div v-else>Sin usuarios</div>
  </section>
</template>

<script setup>
useHead({
  title: "Perfil",
});
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
  // or middleware: 'auth'
});

const user = ref({});

const profile = await useApiFetch({
  path: "onboarding/get-profile",
  type: "auth",
  options: {
    method: "GET",
  },
});
console.log(profile);

if (!profile.status) {
  console.log("ERROR AL OBTENER EL PERFIL DEL USUARIO");
} else {
  user.value = profile.data;
}
</script>
