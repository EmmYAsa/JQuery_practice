$('.clickMenu').click(function(){

    var menuContainer = $(this).closest('.menu'); 
    var h5Element = $(this).closest('.menu').find('h5');

    menuContainer.toggleClass('open'); 

    if (menuContainer.hasClass('open')) {
        h5Element.css('opacity', '1');
    }
    else{
        h5Element.css('opacity', '0');
    }
});