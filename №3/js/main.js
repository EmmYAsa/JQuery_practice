$(document).ready(function() {
    $('.select_color div').hover(function() {
        var colorClass = $(this).attr('class');
        $('.fruits_list div .' + colorClass).addClass('highlight');
    }, function() {
        var colorClass = $(this).attr('class');
        $('.fruits_list div .' + colorClass).removeClass('highlight');
    });
});
