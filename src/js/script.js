// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 300,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    mouseDrag: true,
    nav: true,
    navPosition: "bottom",
    autoplay: true
  });

document.querySelector('.prev').onclick = function () {
    slider.goTo("prev");
};

document.querySelector('.next').onclick = function () {
    slider.goTo("next");
};