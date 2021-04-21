
/*$(document).ready(function(){

    $("#iconos a").mouseover(function(){
        $(this).animate({height:'2%'});

    });
});*/

window.onscroll = function() {miFunction()};
function miFunction() {
    var navbar = document.getElementById("navBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white");
    };
};