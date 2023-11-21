import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { iv, enc } from "../utils/crypto-js";
import { setCookie } from "h3";

export const generateAccessToken = async () => {
  try {
    const accessToken = useCookie("accessToken");

    if (!accessToken.value) {
      const result = (await useApiFetch({
        path: "generate-access-token",
        options: {
          lang: "es",
        },
        app: true,
      })) as any;

      console.log("resultado", result);

      if (result.code === 100) {
        console.log("bien");
        accessToken.value = result.data.accessToken;
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("No se consiguió el access: ", e);
  }
};

export const login = async (form: any) => {
  try {
    const accessToken = useCookie("accessToken");

    if (accessToken.value) {
      const password = form.password;
      delete form.password;

      const dataSend = {
        ...form,
        iv: iv,
        password: enc(password),
        platform: "backoffice",
        type: "lc",
        pushToken: "test",
        version: "1.0.0",
      };

      let settings = {
        method: "POST",
        body: dataSend,
      };

      const result = (await useApiFetch({
        path: "onboarding/login",
        options: settings,
        type: "access",
      })) as any;

      if (result.code === 100) {
        const expirationMinutes = 3; // Expiración en 3 minutos
        const expirationDate = new Date();
        expirationDate.setTime(
          expirationDate.getTime() + expirationMinutes * 60 * 1000
        );
        //expirationDate.setTime(expirationDate.getTime() + 30 * 60000); // 30 minutes

        const authToken = useCookie("authToken", {
          expires: expirationDate,
          watch: true,
        });
        authToken.value = result.data.authToken;
      }

      return result;
    } else {
      return "Error";
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("No se logro hacer login: ", e);
  }
};

export const resetAuthCookieExpiration = async (lastToken: string) => {
  const expirationMinutes = 3; // Expiración en 3 minutos
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + expirationMinutes * 60 * 1000
  );

  //useCookie("authToken").value = null;

  console.log(lastToken);
  console.log(expirationDate);
  const newToken = useCookie("authToken", {
    expires: expirationDate,
  }) as any;
  newToken.value = lastToken;
  console.log(newToken);
};

export const getAccessToken = async () => {
  return useCookie("accessToken").value || (await generateAccessToken());
};

export const getAuthToken = async () => {
  return useCookie("authToken").value || "";
};
