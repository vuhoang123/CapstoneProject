window.addEventListener("load", function () {
  $(document).ready(function () {
    $(".preload").fadeOut(1000);

    $(".carousel").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 2000,
    });

    $(".testimonial__content").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      speed: 1500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".navbar-toggler-icon").click(function () {
      $(".navbar-toggler-icon").toggleClass("fa-times");
    });

    $(".counter").counterUp({
      time: 2000,
    });

    $(".toggle-dark-mode").click(function () {
      if ($("html").attr("dark-mode") == "on") {
        $("html").attr("dark-mode", "off");
        $(".dark-mode-icon").removeClass("fas fa-sun");
      } else {
        $("html").attr("dark-mode", "on");
        $(".dark-mode-icon").addClass("fas fa-sun");
      }
    });

    $(".back-to-top").click(function () {
      $("html").animate({ scrollTop: 0 });
    });

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        $("header").addClass("onScroll");
      } else {
        $("header").removeClass("onScroll");
      }

      if (window.pageYOffset) {
        $(".back-to-top").addClass("active");
      } else {
        $(".back-to-top").removeClass("active");
      }
    });

    $(".btn-play").magnificPopup({ type: "inline", midClick: true });
    $("#popup-video").addClass("mfp-hide");
  });
});
