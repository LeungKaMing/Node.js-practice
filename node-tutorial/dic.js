// var fs = require("fs");

// console.log("创建目录 test1/basic/");
// fs.mkdir("/Users/zhangpengqiao/test1/basic",function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
// });

var fs = require("fs");

console.log("查看 /test1目录");
fs.readdir("/Users/zhangpengqiao/test1/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});

console.log("准备删除目录 /tmp/test");
fs.rmdir("/Users/zhangpengqiao/test1/basic/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /tmp 目录");
   fs.readdir("/Users/zhangpengqiao/test1/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});