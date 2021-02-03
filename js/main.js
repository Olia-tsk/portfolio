$(document).ready(function() {
    // Показать-скрыть пример
    var btnShow = $('.button__show');
    var btnHide = $('.button__hide');
    var image = $('.advantages-example');

    btnShow.on('click', showImage);
    btnHide.on('click', hideImage);

    function showImage(event) {
        event.preventDefault();
        btnShow.addClass('advantages-button--hidden');
        btnHide.removeClass('advantages-button--hidden');
        image.slideDown(500, "linear");
    }

    function hideImage(event) {
        event.preventDefault();
        btnShow.removeClass('advantages-button--hidden');
        btnHide.addClass('advantages-button--hidden');
        image.slideUp(500, "linear");
    }
});