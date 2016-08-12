$(document).ready(function () {
    $(".exhibition").animate({top: 0}, 400);
    $(".super-title").animate({opacity: 1}, 400);
//  topbar滚动事件, make topbar roll up and down when page on scroll
    const topBarMaxHeight = 256;
    var topBarHeight = topBarMaxHeight;
    $("#topbar").height(topBarMaxHeight);

    $(window).scroll(function () {
        if ($(document).scrollTop() < 134) {  // 196 = max-height - min-height
            topBarHeight = topBarMaxHeight - $(document).scrollTop();
            $("#topbar").height(topBarHeight);
        } else {
            topBarHeight = 122;  // = min - height
            $("#topbar").height(topBarHeight);
        }
        if ($(document).scrollTop() > 30) {
            $("#super-title").fadeOut(200);
            $("#sm-title").fadeIn(200);
        } else {
            $("#super-title").fadeIn(200);
            $("#sm-title").fadeOut(200);
        }
    });

});// end on document ready