const Server = require('./serveur');

const config = {};
const instance = new Server(config);
instance.start();