var imgError = function (ele) {
    ele.src = "https://cdn.lixingyong.com/2020/07/18/98fca04416944b282a558b98b2131879.png";
};

HTMLElement.prototype.wrap = function(wrapper) {
    this.parentNode.insertBefore(wrapper, this);
    this.parentNode.removeChild(this);
    wrapper.appendChild(this);
};

Sakura.plugins = {
    TOC: function () {
        if (document.body.clientWidth <= 1200) {
          return;
        }
        var baseTopPadding = 240,
          maxToppadding = 134,
          offset = 100,
          bottomOffset = 30;
        if ($("div").hasClass("toc")) {
          $(".toc-container").css("height", $(".site-content").outerHeight());
        } else {
          // 纠正TOC为空时，警告问题
          return;
        }
    
        $(".entry-content , .links")
          .children("h1,h2,h3,h4,h5")
          .each(function (index) {
            var hyphenated = "toc-head-" + index;
            $(this).attr("id", hyphenated);
          });
    
        tocbot.init({
          tocSelector: ".toc",
          contentSelector: [".entry-content", ".links"],
          headingSelector: "h1, h2, h3, h4, h5",
          collapseDepth: CONFIG.toc.collapseDepth || 0,
          hasInnerContainers: false,
          headingsOffset:
            $("#page").find(".pattern-center").length > 0 ? -500 : -230,
          scrollEndCallback: function (e) {
            if ($(".is-active-link").length == 0) {
              return;
            }
            if ($(window).scrollTop() == 0) {
              $(".toc").animate({
                scrollTop: 0,
              });
              return;
            }
            var activeLikeOffset =
              $(".is-active-link").offset().top - $(window).scrollTop();
            // 当前可视高度小于100，则滚动时toc向上偏移一个li的高度
            if (activeLikeOffset < offset) {
              $(".toc").animate({
                scrollTop:
                  $(".toc").scrollTop() -
                  (offset - activeLikeOffset + $(".is-active-link").height()),
              });
            } else if (activeLikeOffset > $(window).height() - bottomOffset) {
              $(".toc").animate({
                scrollTop: $(".toc").scrollTop() + (activeLikeOffset - offset),
              });
            }
          },
        });
    
        (function () {
          $(".toc").css(
            "max-height",
            $(document).scrollTop() + ($(window).height() - baseTopPadding) + "px"
          );
    
          $(window).scroll(function () {
            var s = $(document).scrollTop();
            if (s == 0) {
              $(".toc").css(
                "max-height",
                $(document).scrollTop() +
                ($(window).height() - baseTopPadding) +
                "px"
              );
            } else if (s > offset) {
              $(".toc").css(
                "max-height",
                $(window).height() - maxToppadding + "px"
              );
            } else {
              $(".toc").css(
                "max-height",
                $(document).scrollTop() +
                ($(window).height() - baseTopPadding) +
                "px"
              );
            }
          });
        })();
      },
      wrapImageWithFancyBox: function () {
        if (!$.fancybox) { return; }
    
        $('.entry-content :not(a) > img, .entry-content > img').each(function() {
          var $image = $(this);
          var imageLink = $image.attr('data-src') || $image.attr('src');
          var $imageWrapLink = $image.wrap(`
            <a class="fancybox fancybox.image" href="${imageLink}"
              itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
          ).parent('a');
          if ($image.is('.group-image-container img')) {
            $imageWrapLink.attr('data-fancybox', 'group').attr('rel', 'group');
          } else {
            $imageWrapLink.attr('data-fancybox', 'default').attr('rel', 'default');
          }
    
          var imageTitle = $image.attr('title') || $image.attr('alt');
          if (imageTitle) {
            $imageWrapLink.append(`<p class="image-caption">${imageTitle}</p>`);
            $imageWrapLink.attr('title', imageTitle).attr('data-caption', imageTitle);
          }
        });
    
        $.fancybox.defaults.hash = false;
        $('.fancybox').fancybox({
          loop   : true,
          helpers: {
            overlay: {
              locked: false
            }
          }
        });
      },
}