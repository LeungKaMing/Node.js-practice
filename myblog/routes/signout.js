/*
* @Author: amber
* @Date:   2016-11-29 12:00:16
* @Last Modified by:   amber
* @Last Modified time: 2016-11-29 15:10:15
*/

'use strict';
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
  // 清空 session 中用户信息
  req.session.user = null;
  req.flash('success', '登出成功');
  // 登出成功后跳转到主页
  res.redirect('/posts');
});

module.exports = router;