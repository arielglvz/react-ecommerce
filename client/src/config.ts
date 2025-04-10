interface Config {
  baseUrl: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://react-ecommerce-theta-plum.vercel.app", // remove the '/' at the end of the link otherwise it will not work
      };
      break;
    case "local":
      config = {
        baseUrl: 'http://localhost:8080',
      };
      break;
    default:
      // config = {};
      break;
  }
  return config;
};

// Dynamically set `selectServer` based on the environment
export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;