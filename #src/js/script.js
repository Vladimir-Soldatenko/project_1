$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  Infinity: true,
  dots: true,
  responsive: [{
    breakpoint: 1255,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 1,
      arrows: false,
    }
  },
  ]
});


// ----------------slider__header==================================================================
$('.slider__header').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  Infinity: true,
  dots: true,
  vertical: true,
});


// ------------------------project--------------------------------------------------------

$('.btn_1').click(() => {
  $('.change__marg').css('margin-bottom', '20px');
  $('.more__text').toggleClass('hide__text');
})


$('.btn_2').click(() => {
  $('.change__marg_2').css('margin-bottom', '20px');
  $('.more__text_2').toggleClass('hide__text');
})



// ----------------------gallery-----------------------------------------------------

$('.gallery__btn').click(() => {
  $('.images').toggleClass('images__transform');
})



// ------------------------scroll-----------------------------------------

$('a[href^="#"').on('click', function () {

  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  });
  return false;
});


// ---------burger menu----------------------------------------

$('.burger__menu__btn').click(() => {
  $('.burger__menu__nav').toggleClass('active');
  $('.burger__menu__btn').toggleClass('active');
})



// ========================================================
