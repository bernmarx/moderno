$(function () {

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

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-list').on('click', function(){
    $('.product_item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active')
  });
  $('.icon-th-large').on('click', function(){
    $('.product_item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active')
  });

  $('.menu_btn').on('click', function(){
    $('.menu_list').slideToggle();
  });

  $('.header_btn-menu').on('click', function(){
    $('.header_box').toggleClass('active');
  });

  $('.product-one_tabs .tab, .settings_tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one_tabs, .settings_tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one_tabs, .settings_tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  var mixer = mixitup('.products_inner-box');
});