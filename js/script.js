(function ($) {
    "use strict"

    // Get current year
    document.getElementById("year").innerHTML = new Date().getFullYear();


    // Dark mode activation
    $(".darkmode-btn").on("click", function () {
        $("body").toggleClass('dark-mode');
    })

    // Header Sticky
    $(window).bind('scroll', function () {
        if (($('body').outerHeight()) > ($(window).outerHeight() + 150)){
            if ($(window).scrollTop() > 130) {
                $('.navibar').addClass('is-sticky');
            } else {
                $('.navibar').removeClass('is-sticky');
            }
        } else {
            $('.navibar').removeClass('is-sticky');
        }
    });

    // Overlays activation
    let $overlayActive = '';
    $(".overlay-btn").on("click", function () {
        $overlayActive = $(this).attr('rel');
        $("#" + $overlayActive).addClass('show');
        $(".overlay-bg").addClass('show');
    })
    $(".overlay-close, .overlay-bg").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#" + $overlayActive).removeClass('show')
        $(".overlay-bg").removeClass('show');
        $overlayActive = '';
    })


    // Password input - show/hide password
    $('.pass-icon').click(function(){
        $(this).toggleClass("show-pass");
        var type = $(this).hasClass("show-pass") ? "text" : "password";
        $(".pass-input input").attr("type", type);

    });




    // Overlay menu
    function DesktopHoverMenu() {
        function isTouchEnabled() { return !!document.createTouch; }

        if ((isTouchEnabled) && ($(window).outerWidth() > 1199)){
            // Desktop menu
            $(".menu-item").on("mouseover", function() {
                if (!( $(this).hasClass('level-0-menu'))){
                    $(this).siblings('.menu-item').each(function(){
                        if ($(this).hasClass('active-menu')){
                            $(this).removeClass('active-menu');
                            $(this).find('.menu-item').each(function(){
                                if ($(this).hasClass('active-menu')){
                                    $(this).removeClass('active-menu');
                                }
                            });
                        }
                    });
                    //$(this).find('.menu-item').removeClass('active-menu');
                    $(this).addClass('active-menu');
                }
            });
        } else {
            // Mobile menu
            $( ".menu-item" ).on("click", function() {
                if (!($(this).hasClass('level-3-menu'))){
                    $(this).addClass('active-menu');
                }
            });
            $(".submenu-title").click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).closest('.menu-item').removeClass('active-menu');
            });
        }
        
        $( ".overlay-close" ).on("click", function() {
            $('.menu-item').each(function(){
                if ($(this).hasClass('active-menu')){
                    $(this).removeClass('active-menu');
                }
            });
        });
    }
    $(document).ready(DesktopHoverMenu);
    $(window).resize(DesktopHoverMenu);
    
    
})(jQuery);