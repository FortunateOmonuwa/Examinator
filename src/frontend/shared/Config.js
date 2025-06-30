let baseUrl = "";
let clientUrl = "";
let redisHost;
let redisPort;
//const env = "local";
const env = "dev";
//-------------------------------------------------
if (env === "local") {
  baseUrl = "http://localhost:5001";
  clientUrl = "http://localhost:5173";
  redisHost = "127.0.0.1";
  redisPort = 6379;
} else if (env === "dev") {
  baseUrl = "https://examinator-backend-dev.onrender.com";
  clientUrl = "https://examinatorr.netlify.app";
  redisHost = process.env.REDIS_HOST;
  redisPort = process.env.REDIS_PORT;
}

export { baseUrl, clientUrl, redisHost, redisPort };
