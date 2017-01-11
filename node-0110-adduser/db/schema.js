/*
* @Author: amber
* @Date:   2017-01-10 13:38:02
* @Last Modified by:   amber
* @Last Modified time: 2017-01-11 15:40:52
*/

'use strict';
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/wwg-0110');
// 链接错误
db.on('error', function(error) {
    console.log(error);
});
// Schema 结构
var Schema = mongoose.Schema;
var userlistScheMa = new Schema({
    user     : {type : String,required:true},
    password : {type : String,required:true},
    email: {type:String,required:true},
    //time   : {type : Date, default: Date.now},
    age   : {type : Number,required:true}
});
// 关联 firstblood -> admins 表
exports.userlist = db.model('admins', userlistScheMa);
exports.db = db;