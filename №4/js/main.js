$(document).ready(function() {
    $('.star').click(function() {
        $('.star').removeClass('orange'); 

        $(this).addClass('orange'); 
        $(this).prevAll('.star').addClass('orange'); 
    });
});
