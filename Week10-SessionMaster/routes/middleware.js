var express = require('express');
var router = express.Router();
var parseurl = require('parseurl');
var session = require('express-session');
var uuid = require('uuid');
//var FileStore = require('session-file-store')(session);
var sessionstore = require('sessionstore');
router.use(function(request, response, next) {
    'use strict';
    console.log('Sample middleware with useful output');
    console.log('request cookies', request.cookies);
    console.log('request secret', request.secret);
    // Uncomment the following line for one run, perhaps.
    // It is too verbose to use everytime
    // console.log(Object.getOwnPropertyNames(request));
    next();
});

/************
 couch session
 ************/
var sessionStore = sessionstore.createSessionStore({
    type: 'couchdb',
    host: 'http://168.156.43.69', // optional
    port: 5984, // optional
    dbName: 'couch-session-nasu', // optional
    collectionName: 'sessions', // optional
    timeout: 10000 // optional
}, function(data) {
    console.log('sessionStore callback', data);
});

var connect = require('connect');
var ConnectCouchDB = require('connect-couchdb')(session);


router.use(session({
    genid: function(req) {
        'use strict';
        return uuid.v4(); // use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store: store
}));
router.use(function(request, response, next) {
    'use strict';
    var views = request.session.views;

    if (!views) {
        views = request.session.views = {};
    }

    // get the url pathname
    var pathname = parseurl(request).pathname;
    console.log('pathname', pathname);
    console.log('views', views);

    // count the views
    views[pathname] = (views[pathname] || 0) + 1;

    next();
});

module.exports = router;

