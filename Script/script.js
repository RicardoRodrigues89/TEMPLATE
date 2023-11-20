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

  function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
  }

  document.querySelector("#navegarPagina2").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#pagina2");
  });

  document.querySelector("#navegarPagina3").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#pagina3");
  });

  document.querySelector("#navegarPagina4").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#pagina4");
  });