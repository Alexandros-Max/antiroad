(function ($) {
    "use strict"
    // WOW INIT
    if ($('.wow').length) {
    new WOW().init();
    }

    // EasyZoom INIT
    if ($('.easyzoom').length) {
        var $easyzoom = $('.easyzoom').easyZoom();
    }

})(jQuery);