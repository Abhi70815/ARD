var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView:3,
  //   centeredSlides: true,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction",
  //   },
  //   autoplayPause:true,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 50,
  //     },
  //   },
  // });

  let song=document.getElementById('song');
song.addEventListener('click',()=>{
    document.location.href="./component/song/song.html";
})
let app=document.getElementById('app');
app.addEventListener('click',()=>{
    document.location.href="./component/song/song.html";
})
let web=document.getElementById('web');
web.addEventListener('click',()=>{
    document.location.href="./component/song/song.html";
})
let livePerform=document.getElementById('livePerform');
livePerform.addEventListener('click',()=>{
    document.location.href="./component/song/song.html";
})