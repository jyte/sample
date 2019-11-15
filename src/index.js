const Server = require('./serveur');

const config = { SERVER_PORT: 3000, id: "npm_started" };
const instance = new Server(config);
instance.start();