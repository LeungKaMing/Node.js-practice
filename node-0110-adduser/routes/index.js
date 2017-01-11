var express = require('express');
var router = express.Router();
var database=require('./../db/schema.js')
/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('index', { title: 'Express' });    // 到达此路径则渲染index文件，并传出title值供 index.html使用
});
router.route('/login').get(function(req,res){
      res.render("login",{title:'User Login'});
}).post(function(req,res){ 
    var query = {user: req.body.user, password: req.body.password};
    database.userlist.count(query, function(err, doc){ 
        if (doc==1) {
            res.redirect('/');
        }else{
            res.send(500);
        }
    })
});
router.get('/register',function(req,res){
    res.render('register',{
        title:'register'
    });
});
router.post('/register',function(req,res){
    var newUser={
        user:req.body.user,
        password:req.body.password,
        email:req.body.email,
        age:req.body.age
    };
    database.userlist.create(newUser,function(err){
        if(err){
            console.log('save failed');
        }else{
            console.log('save success');
             res.redirect('/');
        }
    })
});
router.route('/home').get(function(req,res){
  var findResult=database.userlist.find(function(error, result){
    if (error) {
        res.send(error);
    }else{
     res.render('home', {
        title : '后台',
        adminlist : result,
        date : new Date()
    })
 }
})    
}).post(function(req,res){ 
    var addUser={
        user:req.body.user,
        password:req.body.password,
        email:req.body.email,
        age:req.body.age
    };
    database.userlist.create(addUser,function(err){
    if (err) {
        res.send(500);
        console.log(err);
    }else {
          var findResult=database.userlist.find(function(error, result){
            if (error) {
                res.send(error);
            }else{
             res.render('home', {
                title : '后台',
                adminlist : result,
                date : new Date()
            })
 }
}) 
    }
});
})
module.exports = router;