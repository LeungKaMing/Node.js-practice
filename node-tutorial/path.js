// /**
//  * 
//  * @authors Your Name (you@example.org)
//  * @date    2016-12-05 09:18:29
//  * @version $Id$
//  */

// var path=require("path");

// console.log('normalization: '+ path.normalize('/Users/zhangpengqiao/node-tutorial/'));

// console.log('joint path: '+path.join('/Users','zhangpengqiao', '2slashes/1slash', 'tab'));

// console.log('resolve: '+ path.resolve('path.js'));

// console.log('ext name :'+ path.extname('path.js'));
// 
var dns = require('dns');

dns.lookup('www.zhihu.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});