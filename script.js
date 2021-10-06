const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000
  
  },
  speed :464,
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

document.getElementById('btn_menu').onclick = function(){
  var element = document.getElementById("h_menu");
  element.classList.toggle('show');
  
  

}
