/*
* @Author: amber
* @Date:   2016-11-29 11:50:07
* @Last Modified by:   amber
* @Last Modified time: 2016-11-29 12:02:36
*/

'use strict';
module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登录'); 
      return res.redirect('/signin');
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};