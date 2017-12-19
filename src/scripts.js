
var $ = require('jquery');

console.log($('form'));
console.log('scripts work');

$('form').submit(function(event){
var userEmail = $('#email').val();
console.log(userEmail);
event.preventDefault();
$.ajax({
    url:'/',
    type:'POST',
    data:{
        email: userEmail
    },
    success: function(res){
        console.log(res);
    }
})
})

