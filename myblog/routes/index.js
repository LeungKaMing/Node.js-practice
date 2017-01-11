/*
* @Author: amber
* @Date:   2016-11-29 11:40:04
* @Last Modified by:   amber
* @Last Modified time: 2017-01-04 15:57:29
*/

'use strict';
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  app.use(function (req, res) {
      if (!res.headersSent) {
        res.render('404');
      }
});
};