const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const passport = require("passport");
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');

const session = require("express-session")({
    secret: "wlqkleqw920t",
    resave: true,
    saveUninitialized: true
});


module.exports = () => {
    // Configure prefix to routes
    express.application.prefix = 
    express.Router.prefix = 
    function (path, configure) {
        const router = express.Router();
        this.use(path, router);
        configure(router);
        return router;
    };

    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    // enable files upload
    app.use(fileUpload({
        createParentPath: true
    }));

    //session
    app.use(session);
    app.set('session', session);

    //login 
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    consign({cwd: 'app'})
        .include('models/index.js')
        .then('services')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};