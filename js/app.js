$(function () {
  $(".nav-toggle").on("click", function () {
    $(".links").slideToggle();
  });

  const navbar = $("#nav");
  const topLink = $(".top-link");

  $(window).on("scroll", function () {
    const scrollHeight = $(this).scrollTop();
    const navHeight = navbar.outerHeight();

    if (scrollHeight > navHeight) {
      navbar.addClass("fixed-nav");
    } else {
      navbar.removeClass("fixed-nav");
    }

    if (scrollHeight > 500) {
      topLink.addClass("show-link");
    } else {
      topLink.removeClass("show-link");
    }
  });

  $(".scroll-link").click(function (e) {
    e.preventDefault();

    const id = $(this.hash);
    const target = $(id);
    const navHeight = navbar.outerHeight();
    const fixedNav = navbar.hasClass("fixed-nav");
    let position = target.offset().top - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    $(window).scrollTop(position);
  });

  const btns = $(".tab-btn");
  const articles = $(".content");

  btns.on("click", function () {
    const target = $(this).attr("data-id");

    btns.removeClass("active");
    $(this).addClass("active");

    articles.removeClass("active");
    $("#" + target).addClass("active");
  });

  $(".beefup").beefup();

  $(".slider").slick({
    prevArrow:
      "<button type='button' class='slider-btn slider-prev'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z'/></svg></button>",
    nextArrow:
      '<button type="button" class="slider-btn slider-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"/></svg></button>',
  });

  const date = moment().locale("ky").format("YYYY");

  $("#date").text(date);
});
