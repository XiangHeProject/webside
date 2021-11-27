HTMLElement.prototype.wrap = function(wrapper) {
    this.parentNode.insertBefore(wrapper, this);
    this.parentNode.removeChild(this);
    wrapper.appendChild(this);
  };

Sakura.events = {
    headertop_down:function() {
        var coverOffset = $('#content').offset().top,
            htd = $('.headertop-down');
        if (htd.length === 0) {
            return;
        };
        htd.on("click", function(){
            $('html,body').animate({
                scrollTop: coverOffset,
                easing   : 'swing'
            },800);
        });
    },
    get_to_top:function(){
        var offset = 100,
            offset_opacity = 1200,
            scroll_top_duration = 700,
            $back_to_top = $(".cd-top");

        $(window).scroll(function(){
            if ($(this).scrollTop() > offset) {
                $back_to_top.addClass("cd-is-visible");
                if ($(window).height() > 950) {
                    $(".cd-top.cd-is-visible").css("top", "0");
                  } else {
                    $(".cd-top.cd-is-visible").css(
                      "top",
                      $(window).height() - 950 + "px"
                    );
                }
            } else {
                $(".cd-top.cd-is-visible").css("top", "-900px");
                $back_to_top.removeClass("cd-is-visible cd-fade-out");
            }
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass("cd-fade-out");
            }
        })

        $back_to_top.on("click", function (event) {
            event.preventDefault();
            $("body,html").animate(
              {
                scrollTop: 0,
              },
              scroll_top_duration
            );
        });
    }
}