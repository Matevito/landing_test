interface API {
  path: string;
  options?: any;
  type?: string;
  app?: boolean;
}

export const useApiFetch = async (api: API) => {
  try {
    const config = useRuntimeConfig();
    let API = config.public.API_BASE_URL;
    if (api.app) API = config.public.API_BASE_URL + config.public.SHORT_NAME;

    //api.options.timeout = 90000;
    api.options.lang = "es";
    api.options.shortName = config.public.SHORT_NAME;
    api.options =
      api.type === "access"
        ? configAccess(api.options)
        : api.type === "auth"
        ? configAuth(api.options)
        : {};

    delete api.options.shortName;
    delete api.options.lang;
    console.log(api.options);

    if (api.options.contentType === 0) {
      const formData = new FormData();

      Object.entries(api.options.body).forEach((key: any) => {
        formData.append(key[0], key[1]);
      });

      api.options.body = formData;
    }

    const { data, error } = await useFetch(`${API}/${api.path}`, {
      ...api.options,
      // onResponse({ request, response, options }) {
      //   console.log(response);
      //   return {
      //     code: 100,
      //     status: true,
      //     message: "Servicio no disponible",
      //     data: response._data,
      //   };
      // },
      // onResponseError({ request, response, options }) {
      //   console.log(response);
      //   return {
      //     code: 500,
      //     status: false,
      //     message: "Error en el servidor",
      //     error: "Server error",
      //   };
      // },
    });

    console.log(data);

    if (error.value) {
      return error;
      // return {
      //   code: 500,
      //   status: false,
      //   message: "Servicio no disponible",
      //   error: error.value,
      // };
    }

    console.log(data.value);
    return data.value;
  } catch (e) {
    console.log(e);
  }
};

const configAccess = (settings: any) => {
  const accessToken = useCookie("accessToken").value;

  settings.headers = {
    [`X-${settings.shortName}-Access-Token`]: accessToken,
    lang: settings.lang,
  };

  return settings;
};

const configAuth = (settings: any) => {
  const authToken = useCookie("authToken").value;

  settings.headers = {
    [`X-${settings.shortName}-Auth-Token`]: authToken,
    lang: settings.lang,
    //timeout: 90000,
  };

  return settings;
};
