$(document).ready(function () {
  $(".iframe").responsiveIframes({
    openMessage: "Full screen",
    closeMessage: "Close full screen",
  });
});

/**
 * jQuery Responsive IFrames
 * @author Armin Solecki
 * @source https://github.com/arminsolecki/responsive-iframes/
 * Licensed under the MIT License (http://creativecommons.org/licenses/MIT/)
 *
 **/
(function ($) {
  $.responsiveIframes = function (el, options) {
    var self = this;

    // Access to jQuery and DOM versions of element
    self.$el = $(el);
    self.el = el;

    // Add a reverse reference to the DOM object
    self.$el.data("responsiveIframes", self);

    self.init = function () {
      self.options = $.extend({}, $.responsiveIframes.defaultOptions, options);

      // wrap iframe
      var iframeSrc = self.$el
        .find("iframe")
        .wrap('<div class="iframe-content" />')
        .attr("src");

      //generate header
      var header =
        '<div class="iframe-header">' +
        '<a href="' +
        iframeSrc +
        '" class="iframe-trigger">' +
        self.options.openMessage +
        "</a>" +
        "</div>";

      var trigger = self.$el.prepend(header).find(".iframe-trigger");

      // click event
      $(trigger).click(function (e) {
        e.preventDefault();

        var $this = $(this),
          $html = $("html"),
          isFullScreen = $html.hasClass("iframe-full-screen"),
          message = isFullScreen
            ? self.options.openMessage
            : self.options.closeMessage;

        $this.text(message);

        if (isFullScreen) {
          self.$el.removeClass("iframe-active");
          $html.removeClass("iframe-full-screen");
          setTimeout(function () {
            $(window).scrollTop($this.data("iframe-scroll-position"));
          }, 1);
        } else {
          $this.data("iframe-scroll-position", $(window).scrollTop());
          self.$el.addClass("iframe-active");
          $html.addClass("iframe-full-screen");
        }
      });
    };

    // Run initializer
    self.init();
  };

  $.responsiveIframes.defaultOptions = {
    openMessage: "Full screen",
    closeMessage: "Close",
  };

  $.fn.responsiveIframes = function (options) {
    return this.each(function () {
      new $.responsiveIframes(this, options);
    });
  };
})(jQuery);


$(document).ready(function () {

  $('.iframe').responsiveIframes({ openMessage: "Open iframe", closeMessage: "Close iframe" });

});

const converted = {
  ".iframe": {
    marginBottom: "45px",
    border: "3px solid #131C28",
    overflow: "hidden",
    background: "#fff"
  },
  ".iframe iframe": {
    width: "100%",
    height: "400px",
    border: "0",
    display: "block"
  },
  ".iframe-header": { display: "none" },
  ".js .iframe-header": { display: "block" },
  ".iframe-content": {
    height: "400px",
    overflow: "auto",
    WebkitOverflowScrolling: "touch"
  },
  ".iframe-header a": {
    fontSize: "15px",
    color: "white",
    background: "#3B4658",
    display: "block",
    padding: "15px",
    textAlign: "center",
    borderBottom: "3px solid #131C28"
  },
  ".iframe-header a:hover,\n.iframe-header a:focus": { background: "#6A798E" },
  ".iframe-full-screen .iframe-header": {
    display: "block",
    position: "absolute",
    height: "50px",
    width: "100%"
  },
  ".iframe-full-screen .iframe-content": {
    position: "absolute",
    top: "50px",
    bottom: "0",
    width: "100%",
    height: "auto"
  },
  ".iframe-full-screen .iframe-header a": {
    padding: "0",
    height: "44px",
    lineHeight: "44px",
    textAlign: "center",
    border: "3px solid #131C28"
  },
  ".iframe-full-screen body": {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  ".iframe-full-screen .iframe.iframe-active": {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    zIndex: 9999,
    border: "none"
  },
  ".iframe-full-screen .iframe iframe": {
    position: "absolute",
    height: "100%",
    width: "100%",
    border: "none"
  }
}
