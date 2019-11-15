const Server = require('../src/serveur');

const got = require('got');
const { strictEqual } = require('assert');

describe(`test case`, () => {

    it(`should return id1`, async () => {

        const conf1 = { SERVER_PORT: 3000, id: new Date().toISOString() };
        console.log(`conf1: ${conf1}`);
        const server = new Server(conf1);
        await server.start();
        const serverInstanceId = (await got(`http://localhost:${conf1.SERVER_PORT}/api/counts`)).body;
        await server.stop();

        strictEqual(serverInstanceId, conf1.id)
    });

    it(`should return id2`, async () => {

        const conf2 = { SERVER_PORT: 3001, id: new Date().toISOString() };
        console.log(`conf2: ${conf2}`);
        const server = new Server(conf2);
        await server.start();

        const serverInstanceId = (await got(`http://localhost:${conf2.SERVER_PORT}/api/counts`)).body;
        await server.stop();

        strictEqual(serverInstanceId, conf2.id)
    });
});