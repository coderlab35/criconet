$(window).scroll(function(){
    var sticky = $('.navigation'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


  var swiper = new Swiper(".brand_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   var swiper1 = new Swiper(".blog_slider", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


  var swiper = new Swiper(".blog_slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swiper = new Swiper(".testimonials_thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
    },
  });

  var swiper = new Swiper(".testimonials", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
    thumbs: {
      swiper: swiper,
    },
  });