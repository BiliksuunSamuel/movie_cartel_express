import http from "http";
import App from "./app";
import configuration from "./configuration";

const Server = http.createServer(App);

Server.listen(configuration.port, () =>
  console.log(`Server Running on http://localhost:${configuration.port}`)
);
