window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.fade-in-content');
  content.classList.add('visible');
});

let lastScrollTop = 0;
const indicator = document.getElementById('scroll-indicator');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scroll ke bawah -> sembunyikan tulisan
    indicator.classList.add('hidden');
  } else {
    // scroll ke atas -> tampilkan tulisan
    indicator.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // supaya gak negatif
});

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  let currentSlide = 0;
  const totalSlides = track.children.length;

  nextBtn.onclick = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  prevBtn.onclick = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  };
});
