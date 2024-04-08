let flag = false;
console.log(window.innerWidth);

const swiper1 = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    }
})

const swiper2 = new Swiper(".section4__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1199: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    }
  });

  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.header__popup').classList.add('active');
  }); 
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.header__popup').classList.remove('active');
  }); 
  $(window).scroll(function() {
    ($(this).scrollTop() != 0) ? $('#toTop').fadeIn() : $('#toTop').fadeOut(); 
  });

  $('#toTop').click(function() {
      $('*').animate({scrollTop:0},1000);
  });

