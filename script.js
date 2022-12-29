$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
$(window).on('load scroll', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});

 // Define a variable with your email
 const myEmail = 'mikeenockmichael@gmail.com';

 // Get a reference to the email input element
 const email2Input = document.querySelector('#email');

 // Add an event listener for the input event of the email input element
 email2Input.addEventListener('input', function() {
   // Get the email value entered by the user
   const email = emailInput.value;

   // Do something with the email value, such as send it to a server
   // using an AJAX request or store it in a cookie
 });