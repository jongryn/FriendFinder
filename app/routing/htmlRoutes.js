/*
// Created: Sep. 15, 2017 12:05 AM
// Author: Jonathan Gryn
// Revisions: Jon (9/15/17) - Started htmlRoutes.js
//            Jon (9/16/17) - Added HTML routes
*/

// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

    // console.log('___ENTER htmlRoutes.js___');

    // Home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};