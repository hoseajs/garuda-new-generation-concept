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

const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

nextBtn.onclick = () => {
  currentSlide = Math.min(currentSlide + 1, track.children.length - 1);
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
};

prevBtn.onclick = () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
};

