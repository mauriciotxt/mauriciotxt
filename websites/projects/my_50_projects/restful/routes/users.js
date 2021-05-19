let express = require ("express");
let routes = express.Router();

routes.get ('/users',(req, res) => {
    res.StatusCode = 200;
    res.setHeader = ('Content-Type', 'application/json');
    res.json({
        users: [{
            name: "Mauricio",
            email: "mauricio@email.com",
            id:5
        }]
    });

});

routes.get ('/users/admin',(req, res) => {
    res.StatusCode = 200;
    res.setHeader = ('Content-Type', 'application/json');
    res.json({
        users: [{
            name: "M",
            email: "m@email.com",
            id:4
        }]
    });

});

module.exports = routes;