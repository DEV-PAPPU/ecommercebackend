$(document).ready(function() {

    //Main menu js
    $(".phone-menu").click(function() {
        $(".menu-items").toggleClass("menu-setting");
        // alert("Hello! I am an alert box!!");
    });


    // $(function() {
    //     $(window).on("scroll", function() {
    //         if($(window).scrollTop() > 50) {
    //             $(".header").addClass("active");
    //             $(".brang-logo").addClass("logo-widht");
    //         } else {
    //             //remove the background property so it comes transparent again (defined in your css)
    //            $(".header").removeClass("active");
    //            $(".brang-logo").removeClass("logo-widht");
    //         }
    //     });
    // });




    //slider js

    $('#owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        dots: true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
            }
        }


    });



    function setup() {
        return {
            activeTab: 0,
            tabs: [
                "Tab No.1",
                "Tab No.2",
                "Tab No.3",
                "Tab No.4",
            ]
        };
    };



    //for animation

    AOS.init({
        offset: 250, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
    });



    var typed = new Typed('.type', {
        strings: ['Full-stack developer', 'Web developer', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
    });



})