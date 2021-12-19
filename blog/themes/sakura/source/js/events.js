HTMLElement.prototype.wrap = function(wrapper) {
    this.parentNode.insertBefore(wrapper, this);
    this.parentNode.removeChild(this);
    wrapper.appendChild(this);
  };

Sakura.events = {
    headertop_down:function() {
        var htd = $('.headertop-down');
        if (htd.length === 0) {
            return;
        };
        htd.on("click", function(){
            var coverOffset = $('#content').offset().top;
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
    },
    // 导航栏
    NH: function () {
        var h1 = 0,
          h2 = 50,
          ss = $(document).scrollTop();
        $(window).scroll(function () {
          var s = $(document).scrollTop();
          // 屏幕剩余的高度
          var surplus =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          // 当前位置小数
          var coorY = s / surplus;
          NProgress.set(coorY);
          if (s == h1) {
            $(".site-header").removeClass("yya");
          }
          if (s > h1) {
            $(".site-header").addClass("yya");
          }
          if (s > h2) {
            $(".site-header").addClass("gizle");
            if (s > ss) {
              $(".site-header").removeClass("sabit");
            } else {
              $(".site-header").addClass("sabit");
            }
            ss = s;
          }
        });
      },
      MGT: function () {
        var offset = 20,
          scroll_top_duration = 700,
          $m_back_to_top = $(".m-cd-top");
        $(window).scroll(function () {
          if ($(this).scrollTop() > offset) {
            $m_back_to_top.addClass("cd-is-visible");
          } else {
            $m_back_to_top.removeClass("cd-is-visible");
          }
        });
        $m_back_to_top.on("click", function (event) {
          event.preventDefault();
          $("body,html").animate(
            {
              scrollTop: 0,
            },
            scroll_top_duration
          );
        });
      },
      MN: function () {
        $(".iconflat").on("click", function () {
          $("body").toggleClass("navOpen");
          $("#main-container,#mo-nav,.openNav").toggleClass("open");
        });
      },
  
      // 移动端菜单自动隐藏
      MNH: function () {
        if ($("body").hasClass("navOpen")) {
          $("body").toggleClass("navOpen");
          $("#main-container,#mo-nav,.openNav").toggleClass("open");
        }
      },
  
      // 自适应窗口高度
      AH: function () {
        if (Poi.windowheight == "auto") {
          if (window.outerWidth <= 860) {
            $("#centerbg").css({ height: 300 });
            $(".headertop").addClass("headertop-bar");
            return;
          }
          $(".headertop").removeClass("headertop-bar");
          if ($("h1.main-title").length > 0) {
            var _height = $(window).height();
            $("#centerbg").css({ height: _height });
            $("#bgvideo").css({ "min-height": _height });
            $(window).resize(function () {
              Siren.AH();
            });
          }
        } else {
          $(".headertop").addClass("headertop-bar");
        }
      }
}