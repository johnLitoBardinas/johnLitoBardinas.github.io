$(function() {
    "use strict";
    var t = $(window);
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -80
    }), $(".navbar-nav .nav-link").on("click", function() {
        $(".navbar-collapse.show").removeClass("show")
    }), t.on("scroll", function() {
        var o = t.scrollTop(),
            a = $(".navbar"),
            e = $(".navbar .logo> img");
        o > 100 ? (a.addClass("nav-scroll"), e.attr("src", "img/logo-dark.png")) : (a.removeClass("nav-scroll"), e.attr("src", "img/logo-light.png"))
    }), t.on("scroll", function() {
        var t = $(".button-top");
        $(this).scrollTop() >= 700 ? t.show() : t.hide()
    }), t.on("scroll", function() {
        $(".skill-progress span").each(function() {
            var t = $(this).offset().top + $(this).outerHeight(),
                o = $(window).scrollTop() + $(window).height(),
                a = $(this).attr("data-value");
            o > t && $(this).css({
                width: a
            })
        })
    }), $(".counter .number").counterUp({
        delay: 10,
        time: 1500
    }), $(".testimonials .owl-carousel").owlCarousel({
        items: 1,
        loop: !0,
        mouseDrag: !1,
        autoplay: !0,
        smartSpeed: 500
    }), $(".portfolio .gallery").magnificPopup({
        delegate: ".popup-img",
        type: "image",
        gallery: {
            enabled: !0
        }
    })
}), $(window).on("load", function() {
    $(".loading").fadeOut(500);
    var t = $(".gallery").isotope({
        itemSelector: ".item"
    });
    $(".filtering").on("click", "span", function() {
        var o = $(this).attr("data-filter");
        t.isotope({
            filter: o
        })
    }), $(".filtering").on("click", "span", function() {
        $(this).addClass("active").siblings().removeClass("active")
    }), $("#contact-form").validator(), $("#contact-form").on("submit", function(t) {
        if (!t.isDefaultPrevented()) {
            return $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(this).serialize(),
                success: function(t) {
                    var o = "alert-" + t.type,
                        a = t.message,
                        e = '<div class="alert ' + o + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + a + "</div>";
                    o && a && ($("#contact-form").find(".messages").html(e), $("#contact-form")[0].reset())
                }
            }), !1
        }
    })
});