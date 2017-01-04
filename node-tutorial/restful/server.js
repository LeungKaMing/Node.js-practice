/*
* @Author: amber
* @Date:   2016-12-05 11:08:19
* @Last Modified by:   amber
* @Last Modified time: 2016-12-05 11:28:29
*/

'use strict';
var express=require('express');
var app=express();
var fs=require('fs');

// var user={
//     "user5":{
//         "name":"monit",
//         "password":"password5",
//         "professtion":"teacher",
//         "id":5
//     }
// }

// app.get('/addUser',function(req,res){
//     fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
//         data=JSON.parse(data);
//         data['user5']=user['user5'];
//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// })

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//    });
// })

// 显示用户详情 #
// app.get('/:id',function(req,res){
//     fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
//         data=JSON.parse(data);
//         var user=data["user"+req.params.id];
//         console.log(user);
//         res.end(JSON.stringify(user));
//     });
// })
// 
var id=2;
app.get('/deleteUsers',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        data=JSON.parse(data);
        delete data["user"+2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})