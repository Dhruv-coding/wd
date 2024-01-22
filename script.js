var swiper = new Swiper(".home-slider", 
{
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation: 
  {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", 
{
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer=document.querySelector('.food-preview-container');
let previewBox=previewContainer.querySelectorAll('.food-preview');
document.querySelectorAll('.food .slide').forEach(food=>{
  food.onclick=()=>{
    previewContainer.style.display='flex';
    let name=food.getAttribute('data-name');
    previewBox.forEach(preview=>{
        let target=preview.getAttribute('data-target');
        if(name==target){
          preview.classList.add('active');
        }
    });
  };
});

previewContainer.querySelector('#close-preview').onclick=()=>{
  previewContainer.style.display='none';
  previewBox.forEach(close=>{
    close.classList.remove('active');
  });
};
function scrollToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollToFood() {
    var contactSection = document.getElementById('menu');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollToHome() {
    var contactSection = document.getElementById('Home');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
}