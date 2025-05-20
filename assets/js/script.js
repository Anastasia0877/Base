$(document).ready(function(){
    $('.team-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".team__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  $(document).ready(function(){
    $('.work-slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".work__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 820,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 569,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  // Бургер меню
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 