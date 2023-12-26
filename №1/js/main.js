$('.container').mousemove(function(event) {
    var container = $(this);
    var image = container.find('.movable');
    var imageWidth = image.width();
    var imageHeight = image.height();
    var containerWidth = container.width();
    var containerHeight = container.height();

    var cursorX = event.pageX;
    var cursorY = event.pageY;

    var minX = 0;
    var minY = 5;
    var maxX = containerWidth - imageWidth;
    var maxY = containerHeight - imageHeight;

    var pointerOffsetX = 0; 
    var pointerOffsetY = 10; 

    var posX = cursorX - pointerOffsetX;
    var posY = cursorY - pointerOffsetY;

    posX = Math.min(Math.max(posX, minX), maxX);
    posY = Math.min(Math.max(posY, minY), maxY);

    image.css({
        left: posX + 'px',
        top: posY + 'px'
    });
});
