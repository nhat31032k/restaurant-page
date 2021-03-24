$(".top-product__container-sliderfood").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  prevArrow: ".top-product__container-slider-prev-btn",
  nextArrow: ".top-product__container-slider-next-btn",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        autoplay: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});
$(".About-Meal__container-wrap").slick({
  autoplay: true,
  prevArrow: ".top-product__container-slider-prev-btn",
  nextArrow: ".top-product__container-slider-next-btn",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        // slidesToShow: 2,
        autoplay: true,
      },
    },
  ],
});
$(".main-wraper__nav-triger").click(function () {
  $(".main-wraper__site-content-wraper").toggleClass("scale");
});
