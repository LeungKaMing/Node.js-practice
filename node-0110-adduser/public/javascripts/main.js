/*
* @Author: amber
* @Date:   2017-01-11 10:27:22
* @Last Modified by:   amber
* @Last Modified time: 2017-01-11 17:04:41
*/

'use strict';
$(function(){
    $("#login0").click(function(){ 
            var username = $("#user").val();
            var password = $("#password").val();
            var data = {"user":username,"password":password};
            $.ajax({ 
                url:'/login',
                type:'post',
                data: data,
                success: function(data,status){ 
                    if(status == 'success'){ 
                        location.href = 'home';
                    }
                },
                error: function(data,status){ 
                    if(status == 'error'){ 
                        console.log("error");
                        location.href = 'login';
                    }
                }
            });
        });
    $("#reg0").click(function(){
        window.location.href="register";
    });
    $("#reg_admin").click(function(){
        var errorCount = 0;
        $('#addUser input').each(function(index, val) {
            if($(this).val() === '') { errorCount++; }
        });
        if(errorCount===0){
            var user=$("#user1").val();
            var password=$("#password1").val();
            var email=$("#email1").val();
            var age=$("#age1").val();
            var data={
                "user":user,
                "password":password,
                "email":email,
                "age":age
            };
            $.ajax({
                url:'/home',
                type:'post',
                data:data,
                success: function(data,status){ 
                    if(status == 'success'){ 
                        location.href = 'home';
                    }
                },
                error: function(data,err){ 
                        console.log("failed");
                }
            });
        };
    });
})

