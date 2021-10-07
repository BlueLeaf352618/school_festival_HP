document.getElementById('modal').addEventListener("click",function(){
  console.log("テスト")
  document.getElementById('mask').classList.toggle('kesu');
  document.getElementById('modal').classList.toggle('kesu');
})

document.getElementById('mask').addEventListener("click",function(){
  console.log("テスト")
  document.getElementById('mask').classList.toggle('kesu');
  document.getElementById('modal').classList.toggle('kesu');
})
function open(){
  dispatchEvent.className="active"
}

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
