/**
 * Created by filip on 15-05-07.
 */
$(function() {
    var timer;
    var update = function () {
        $("#cat").css('background-image', "url('http://thecatapi.com/api/images/get?format=src&type=gif&t" + new Date().getTime() + "')" );
    };

    update();

    var initTimer = function() {
        timer = setInterval(update, 20000);
    };

    initTimer();

    $(document).on('click', function() {
        clearInterval(timer);
        update();
        initTimer();
    });

    $("#reload").on('click', update);
});