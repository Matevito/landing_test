<template>
  <div class="login">
    <!-- <NuxtLink to="/">Home</NuxtLink> -->
    <NuxtLayout> </NuxtLayout>

    <div class="content-login grid m-0">
      <div class="col-8">
        <div class="content-form p-5">
          <!-- Logo -->
          <img src="/img/logo.svg" alt="Logo" class="logo" />
          <!-- Formulario de inicio de sesión -->

          <div class="card form-login">
            <div
              class="flex align-content-center flex-wrap card-container justify-content-center content-form-login"
            >
              <div
                class="card align-items-center justify-content-center bg-white border-round m-2 p-8"
              >
                <h3 class="upper-first-letter">
                  {{ $t("onboarding.welcome") }}
                </h3>
                <h2 class="upper-first-letter">
                  {{ $t("onboarding.titleLogin") }} <br />
                  {{ $t("onboarding.subtitleLogin") }}
                </h2>

                <form
                  @submit.prevent="loginSubmit()"
                  class="flex flex-column gap-2"
                >
                  <div class="flex flex-column gap-2">
                    <label class="upper-first-letter" for="email">
                      {{ $t("onboarding.email") }}
                    </label>
                    <InputText
                      type="text"
                      id="email"
                      placeholder="example@gmail.com"
                      v-model="email"
                    />
                  </div>

                  <div class="flex flex-column gap-2 my-3">
                    <label class="upper-first-letter" for="password">{{
                      $t("onboarding.password")
                    }}</label>
                    <Password
                      class="password-login"
                      id="password"
                      v-model="password"
                      placeholder="***************"
                      toggleMask
                      :feedback="false"
                    />
                  </div>
                  <Button
                    type="submit"
                    :label="$t('onboarding.login')"
                    severity="secondary"
                    rounded
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 p-0">
        <div class="content-background">
          <img src="/img/background_left_login.png" alt="Background-Left" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Login",
});
definePageMeta({
  layout: "login",
  middleware: ["auth"],
});
const route = useRoute();
const email = ref("");
const password = ref("");

const accessToken = await getAccessToken();
console.log(accessToken);

const loginSubmit = async () => {
  console.log(email.value, password.value);
  const authToken = await login({
    email: email.value,
    password: password.value,
  });

  if (authToken) {
    console.log(authToken); // Inicio
    await navigateTo("/profile");
  }
};

// console.log(route.meta.title); // Inicio
</script>

<style type="text/scss" lang="scss">
.form-login {
  h3 {
    color: #868c9e;
    font-size: 1.5rem;
  }
  h2 {
    color: $colorSecondary;
    font-size: 2rem;
  }

  .password-login {
    .p-inputtext {
      width: 100%;
    }
  }
}
</style>
