function headertop_down() {
    var coverOffset = $('#content').offset().top;
    $('html,body').animate({
        scrollTop: coverOffset,
        easing   : 'swing'
    },800);
}

function getToTop(){
    $('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      },800);
}