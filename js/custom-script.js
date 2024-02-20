$( document ).ready(function() {
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
        divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 75
        }, 100);
    });
});
