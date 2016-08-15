//kits

// 检查底部elem是否进入了可视区
function isScrolledIntoView (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height()/4;

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return pageBottom > elementTop;
    }
}

$(document).ready(function () {
    var hasReset = false;
    $(".exhibition").animate({top: 0}, 400, 'easeOutCubeRoot');
    $(".super-title").animate({opacity: 1}, 400);
//  topbar滚动事件, make topbar roll up and down when page on scroll
    const topBarMaxHeight = 256;
    var topBarHeight = topBarMaxHeight;
    $("#topbar").height(topBarMaxHeight);

    $(window).scroll(function () {
        // topbar motion
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

        // about motion animate
        if (isScrolledIntoView("._about",false) === false) {
            $("._about-copyright").animate({opacity: 0.2},100);
            $("._about-support").animate({opacity: 0.2},100);
            hasReset = true;

        }
        if (isScrolledIntoView("._about", true) && hasReset) {
            $("._about-copyright").animate({opacity: 1},300);
            $("._about-support").animate({opacity: 1},300);
            hasReset = false;
        }

    });


});// end on document ready

// Ripple Effect
jQuery(function($) {

    // RB-RIPPLE
    $(document).on("mousedown", "[data-ripple]", function(e) {

        var $self = $(this);

        if($self.is(".btn-disabled")) {
            return;
        }
        if($self.closest("[data-ripple]")) {
            e.stopPropagation();
        }

        var initPos = $self.css("position"),
            offs = $self.offset(),
            w = Math.min(this.offsetWidth, 160),
            h = Math.min(this.offsetHeight, 160),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            $ripple = $('<div/>', {class : "ripple",appendTo : $self });

        if(!initPos||initPos==="static") {
        }

        $('<div/>', {
            class : "rippleWave",
            css : {
                background: $self.data("ripple"),
                width: h,
                height: h,
                left: x - (h/2),
                top: y - (h/2)
            },
            appendTo : $ripple,
            one : {
                animationend : function(){
                    $ripple.remove();
                }
            }
        });
    });

});


