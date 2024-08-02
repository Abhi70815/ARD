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

fetch('/component/ques.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  displayQuiz(data);
})

function displayQuiz(data) {
  const questionContainer = document.querySelector('.question');
  questionContainer.innerHTML = '';

  data.forEach((element, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quesData';
    questionDiv.innerHTML = `
      <div class="ques" id="id${index}">
        <h2>${element.ques}</h2>
        <i class="fas fa-plus-circle"></i>
      </div>
      <p class="ans">${element.ans}</p>
    `;
    questionContainer.appendChild(questionDiv);

    // Add event listener to question
    questionDiv.querySelector('.ques').addEventListener('click', toggleAnswer);
  });
}

function toggleAnswer(event) {
  const questionDiv = event.target.closest('.quesData');
  const answer = questionDiv.querySelector('.ans');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    questionDiv.style.backgroundColor = 'transparent';
  } else {
    answer.style.display = 'block';
    questionDiv.style.backgroundColor = '#03a8f41f';
  }
}

let msg="Hi%20sir%20I%20want%20to%20know%20how%20can%20you%20grow%20my%20bussiness";

   document.querySelector('.hero .btn').addEventListener('click',()=>{
    document.location.href=`https://wa.me/917081583323?text=${msg}`;
   });

  //  let msg2="Hi%20sir%20I%20want%20to%20know%20more%20about%20advertisement.";

  //  let banner1=document.querySelector('.banner .btn');
  //   banner1.href=`https://wa.me/917081583323?text=${msg2}`;
   