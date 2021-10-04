function headertop_down() {
    var coverOffset = $('#content').offset().top;
    $('html,body').animate({
        scrollTop: coverOffset
    },
    800);
}