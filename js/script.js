$(function () {


    // accordion js
    $('.card').on('click', function () {
        $('.card_border').removeClass('card_border');
        $(this).toggleClass('card_border');
    });
    // accordion js



    // CountDown js start here
    $('.hours').countdown('2030/05/02', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.minutes').countdown('2030/05/02', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.seconds').countdown('2030/05/02', function (event) {
        $(this).html(event.strftime('%S'));
    });
   
    // CountDown js end here



    //Tounament scroll js
    $(".scroll_part").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });

});