//Sniper home
var swiper = new Swiper(".mySwiper2", {
  effect: "cards",
  grabCursor: true,
autoplay: {
  delay: 8000,
  disableOnInteraction: false,
},
});


//Sniper about
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".responsive", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });



//Road Map Scroll Story linea de Tiempo

const roadmap0 = gsap.utils.toArray('.phase-0');
roadmap0.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 70%",
        end: "top -300%",
        // markers: true
    })
})

const roadmap1 = gsap.utils.toArray('.phase-1');
roadmap1.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top -300%",
        // markers: true
    })
})

const roadmap2 = gsap.utils.toArray('.phase-2');
roadmap2.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top -300%",
        // markers: true
    })
})

const roadmap3 = gsap.utils.toArray('.phase-3');
roadmap3.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top -300%",
        // markers: true
    })
})

const roadmap4 = gsap.utils.toArray('.phase-4');
roadmap4.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top -30%",
        // markers: true
    })
})

const marca = gsap.utils.toArray('.roadmap__marca');
marca.forEach((img, i) => {
    ScrollTrigger.create({
        trigger: img, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top 0%",
        // markers: true
    })
})

//Road Map Scroll Story Texto

const subtitulo = gsap.utils.toArray('.roadmap__subtitulo');
subtitulo.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 60%",
        end: "top -50%",
        // markers: true
    })
})

const parrafo = gsap.utils.toArray('.roadmap__parrafo');
parrafo.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text, 
        toggleClass: 'active',
        start: "top 50%",
        end: "top -50%",
        // markers: true
    })
})

//Navegacion
function nav(){
    const navegation = document.querySelector('.navegation__ico');
    const menu = document.querySelector('.navegation__nav')

    navegation.classList.toggle("active");
    menu.classList.toggle("active");
  }
