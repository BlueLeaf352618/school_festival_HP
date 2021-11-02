// document.getElementById('modal').addEventListener("click",function(){
//   console.log("テスト")
//   document.getElementById('mask').classList.toggle('kesu');
//   document.getElementById('modal').classList.toggle('kesu');
// })

// document.getElementById('mask').addEventListener("click",function(){
//   console.log("テスト")
//   document.getElementById('mask').classList.toggle('kesu');
//   document.getElementById('modal').classList.toggle('kesu');
// })
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
    document.getElementById("h_menu").classList.toggle('show');
  }

document.querySelector('#top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelector('#nokori').addEventListener('click', () => {
  window.scrollTo({
    top: 300,
    behavior: "smooth"
  });
});
  document.querySelector('#access').addEventListener('click', () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth"
    });
  
});
document.querySelector('#covid-19').addEventListener('click', () => {
  window.scrollTo({
    top: 1100,
    behavior: "smooth"
  });

});
document.querySelector('#yotei').addEventListener('click', () => {
  window.scrollTo({
    top: 1900,
    behavior: "smooth"
  });

});
document.querySelector('#maeno').addEventListener('click', () => {
  window.scrollTo({
    top: 2100,
    behavior: "smooth"
  });

});
document.querySelector('#waribiki').addEventListener('click', () => {
  window.scrollTo({
    top: 2100,
    behavior: "smooth"
  });

});
document.getElementById('nokori').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}
document.getElementById('access').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}
document.getElementById('covid-19').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}
document.getElementById('yotei').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}
document.getElementById('maeno').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}
document.getElementById('waribiki').onclick = function(){
  document.getElementById("h_menu").classList.toggle('show');
}

const reiwa = document.querySelector('.reiwa');
const counter = document.querySelector('.counter');

function nanNichi(){

const d1 = new Date();
const d2 = new Date('2021/11/25 09:30'); 

const d3 = d2 - d1;
const d3_Sec = Math.floor(d3 / 1000);
const Minute_Sec = 60;
const Hour_Sec = 60 * 60;
const Day_Sec = 60 * 60 * 24;

const d4_Day = Math.floor(d3_Sec / Day_Sec);
const d5_Hour = Math.floor(d3_Sec / Hour_Sec  % 24);
const d6_Minute = Math.floor(d3_Sec / Minute_Sec % 60);
const d7_Sec = Math.floor(d3_Sec % 60);
   
counter.innerHTML = d4_Day + "日" + d5_Hour + "時間" + d6_Minute + "分" + d7_Sec + "秒";
setTimeout(nanNichi, 1000);
}

nanNichi();



Resources
