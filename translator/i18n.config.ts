export default defineI18nConfig(() => ({
  legacy: false,
  locale: "es",
  strategies: "prefix",
  messages: {
    es: {
      onboarding: {
        welcome: "bienvenido",
        titleLogin: "ingresa tu correo y ",
        subtitleLogin: "contraseña para iniciar",
        email: "correo electrónico",
        password: "contraseña",
        login: "Ingresar",
      },
    },
    en: {
      onboarding: {
        welcome: "welcome",
        titleLogin: "enter your email and ",
        subtitleLogin: "password to start",
        email: "email",
        password: "password",
        login: "Login",
      },
    },
    fr: {
      onboarding: {
        welcome: "accueillir",
        titleLogin: "entrez votre email et ",
        subtitleLogin: "votre mot de passe pour commencer",
        email: "e-mail",
        password: "passe",
        login: "Entrer dans",
      },
    },
  },
}));
