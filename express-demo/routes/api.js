/*
* @Author: amber
* @Date:   2016-11-24 11:32:56
* @Last Modified by:   amber
* @Last Modified time: 2016-11-24 11:33:23
*/

'use strict';
exports.index = function (req, res){
  res.json(200, {name:"张三",age:40});
}