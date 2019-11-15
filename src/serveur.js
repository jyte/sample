const express = require('express');

class Server {

    constructor(config) {
        this._id = config.id;
        this._config = config;

        this._app;
        this._server;

    }

    async start() {
        this._app = express();

        // init api
        this._app.use('/api', require('./api')(this));

        await new Promise((resolve, reject) => {
            this._server = this._app.listen(this._config.SERVER_PORT, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    async stop() {

        await new Promise(resolve => this._server.close(resolve));
    }
}

module.exports = Server;