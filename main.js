$(document).ready(function () {

    $('img').click(function () {
        $(this).fadeOut();
    });

    $("p").click(function () { 
        location.reload(true);  
    });
});
