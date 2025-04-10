interface Config {
  baseUrl: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  if (server === "disabled") {
    return {}; // return empty config to disable any setup
  }
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://supergearclone.vercel.app", // ! remove the '/' at the end of the link otherwise it will not work
      };
      break;
    case "local":
      config = {
        baseUrl: 'http://localhost:8080',
      };
      break;
    default:
      config = {};
      break;
  }
  return config;
}

export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;