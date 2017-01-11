/*
* @Author: amber
* @Date:   2016-11-29 14:56:02
* @Last Modified by:   amber
* @Last Modified time: 2016-11-29 15:19:52
*/

var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },

  // 通过用户名获取用户信息
  getUserByName: function getUserByName(name) {
    return User
      .findOne({ name: name })
      .addCreatedAt()
      .exec();
  }
};