export default defineNuxtRouteMiddleware(async (to, from) => {
  const authToken = await getAuthToken();
  if (to.path !== "/login") {
    if (authToken === "") {
      return navigateTo("/login");
    }
  } else {
    if (authToken !== "") {
      return navigateTo("/profile");
    }
  }
});
