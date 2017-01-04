/*
* @Author: amber
* @Date:   2016-12-09 15:50:59
* @Last Modified by:   amber
* @Last Modified time: 2016-12-09 16:20:56
*/

'use strict';
$(function(){
    $("#reg").click(function(){ 
      location.href = 'reg';
    });
    $("#login").click(function(){ 
          location.href = 'login';
    });
    $("#reg1").click(function(){ 
            var username = $("#username").val();
            var password = $("#password").val();
            var password1 = $("#password1").val();
            if(password !== password1){ 
                $("#password").css("border","1px solid red");
                $("#password1").css("border","1px solid red");
            }else if(password === password1){
            var data = {"uname":username,"upwd":password};
            $.ajax({ 
                url: '/reg',
                type: 'post',
                data: data,
                success: function(data,status){ 
                    if(status == 'success'){ 
                        location.href = 'index';
                    }
                },
                error: function(data,err){ 
                        location.href = 'reg';
                }
            }); 
        }
        });
    $("#login0").click(function(){ 
      var username = $("#username").val();
      var password = $("#password").val();
      var data = {"uname":username,"upwd":password};
      $.ajax({ 
        url:'/login',
        type:'post',
        data: data,
        success: function(data,status){ 
          if(status == 'success'){ 
            location.href = 'index';
          }
        },
        error: function(data,status){ 
          if(status == 'error'){ 
            location.href = 'login';
          }
        }
      });
    });
  })