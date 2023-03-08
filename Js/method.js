console.log("conected");

const swiper = new Swiper('.swiper', {
    // parameters optional
    direction: 'horizontal',
    loop: true,

    //autoplay parameters
    autoplay: {
      delay: 5000,
    },
  
    // parameter untuk paginationnya
    pagination: {
      el: '.swiper-pagination',
    },
  
    // tombol navigasinya
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // parameters untuk scrollbarnya
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });