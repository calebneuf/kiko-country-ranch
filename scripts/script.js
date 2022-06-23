//make top-banner-text element fade in on load
$(document).ready(function () {
    $(".top-banner-text").fadeIn(2000);
    $(".line").fadeIn(2000);


});


//show registration-img when registration is clicked
$(document).ready(function () {
    $(".registration").click(function () {
        if ($(this).find(".registration-hidden").css('display') == 'none') {
            $(this).find(".registration-hidden").fadeIn(300);
            $(this).find(".temp-text").show();
            $(this).find(".temp-text").fadeOut(5000);
        } else {
            $(this).find(".registration-hidden").fadeOut(500);
            $(this).find(".temp-text").hide();
        }

    });
});