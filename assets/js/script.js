const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.advantages__slider-btn_next',
        prevEl: '.advantages__slider-btn_prev',
    },
});

// let init = false;

// function showSwiper() {
//     if (window.innerWidth <= 320) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper('.swiper', {
//                 slidesPerView: 1,
//                 loop: true,
//                 navigation: {
//                     nextEl: '.advantages__slider-btn_next',
//                     prevEl: '.advantages__slider-btn_prev',
//                 },
//             });
//         }
//         else if (init) {
//             swiper.destroy();
//             init = false;
//         }
//     }
// }
// showSwiper();
// window.addEventListener("resize", showSwiper);
// window.addEventListener("onload", showSwiper)




// let hiddenSlider1 = document.querySelector(".advantages__slider");
// let hiddenSlider2 = document.querySelector(".advantages__list");
// let hiddenSlider3 = document.querySelectorAll(".advantages__wrap");

// console.log(hiddenSlider3);

// function showSlider() {
//     if (window.innerWidth<=320){
//         hiddenSlider1.classList.add("swiper")
//         hiddenSlider2.classList.add("swiper-wrapper")

//         for (let elem of hiddenSlider3) {
//             elem.classList.add("swiper-slide")
//         }        
//     }
//     else {
//         hiddenSlider1.classList.remove("swiper")
//         hiddenSlider2.classList.remove("swiper-wrapper")

//         for (let elem of hiddenSlider3) {
//             elem.classList.remove("swiper-slide")
//         }   
//     }
// };

// window.addEventListener("resize", showSlider);
// window.addEventListener("onload", showSlider);