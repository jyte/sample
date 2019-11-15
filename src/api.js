const router = require('express').Router();

module.exports = (server) => {

    console.log(`in api function ${server._id}`)

    router.get("/counts", (req, res) => {
    
        console.log(`in counts function ${server._id}`)
        return res.json(server._id);
    });

    return router;
}; 