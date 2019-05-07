// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-getting-started-intermediate

'use strict';

module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    context.args.data.date = Date.now();
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
};
