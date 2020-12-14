$(document).ready(function(){
    $('.s-carousel').slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    responsive: [
        { breakpoint: 940,
            settings: {
              slidesToShow: 1,
              dots: false,
            }
          }
    ]
    });
  });