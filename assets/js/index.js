/// <reference types="../@types/jquery" />
$(document).ready(function() {
    $("#open").click(function() {
        $("nav .container .nav-item").show(); 
        $("nav .container .close").show(); 
    });
    
    $("#close").click(function() {
        $("nav .container .nav-item").hide(); 
        $("nav .container .close").hide(); 
    });
});
