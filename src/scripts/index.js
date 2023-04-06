
// Swiper and modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
// gsap
import gsap from 'gsap';

// index.scss
import '../styles/index.scss';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.to('.tit', {x: 100});

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


