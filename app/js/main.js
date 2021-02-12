$(function(){
    var mixer = mixitup('.products_inner-box');

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider_inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4
    });
});