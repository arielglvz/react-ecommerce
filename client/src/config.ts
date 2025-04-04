interface Config {
  baseUrl: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "",
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

export const selectServer = "local";
export const config = checkConfig(selectServer) as Config;