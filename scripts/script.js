$(document).ready(function () {
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact-contaciner").offset().top
        }, 1000);
    });

    $("#my-team").click(function () {
        $('html, body').animate({
            scrollTop: $("#my-team-container").offset().top
        }, 1000);
    });

    $("#my-publications").click(function () {
        $('html, body').animate({
            scrollTop: $("#my-publications-container").offset().top
        }, 1000);
    });
});