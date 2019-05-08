// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

