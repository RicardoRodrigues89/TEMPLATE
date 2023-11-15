const swiper = new Swiper('.swiper', {

    spaceBetween: 10,
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });