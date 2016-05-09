'use strict';

var path = require('path');

module.exports = function(app) {
  app.get('/trump/2016', function(req, res) {
    return res.json({ msg: 'What in the fucking hell is wrong with you?' });
  });

  app.get('*', function(req, res) {
    res.sendFile('index.html', { root: 'public' });
  });
};

