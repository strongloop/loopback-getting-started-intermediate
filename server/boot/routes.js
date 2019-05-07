// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-getting-started-intermediate

'use strict';

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

