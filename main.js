$(document).ready(function () {

    $('img').click(function () {
        $(this).css('visibility', 'hidden');
    });

    $("p").click(function () {
        location.reload(true);
    });
    
});
