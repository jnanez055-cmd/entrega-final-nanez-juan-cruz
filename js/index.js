/* ======================
   MENU HAMBURGUESA
====================== */
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social--header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    social.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
});

/* ======================
   ANIMACION CTA
====================== */
document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".hero__cta .button");
  if (!ctaButton) return;

  const originalBg = "transparent";
  const originalColor = "var(--color-text-primary)";
  const originalBorder = "1px solid var(--color-border)";

  ctaButton.style.transition =
    "background-color 0.3s ease, color 0.3s ease, transform 0.25s ease";

  ctaButton.addEventListener("mouseenter", () => {
    ctaButton.style.backgroundColor = "var(--color-text-primary)";
    ctaButton.style.color = "var(--color-bg-primary)";
    ctaButton.style.transform = "scale(1.03)";
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.backgroundColor = originalBg;
    ctaButton.style.color = originalColor;
    ctaButton.style.border = originalBorder;
    ctaButton.style.transform = "scale(1)";
  });
});

/* PORTFOLIO / SERVICES CARRUSEL */

// Referencias DOM
const modal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const gridImages = document.querySelectorAll('.img__grid[data-project]');
const modalCounter = document.getElementById('modalCounter');


let currentImages = [];
let currentIndex = 0;


const projects = {
  atm: ['/media/Portolio/ATM/atm01.jpg'],

  energizer: [
    '/media/Portolio/Energizer/0b4675184885011.655a4b56215e7.jpg',
    '/media/Portolio/Energizer/2ba5d9184885011.655a4b561ed0f.jpg',
    '/media/Portolio/Energizer/8b0508184885011.655a4b562005b.jpg',
  ],

  hierbica: [
    '/media/Portolio/Hierbica /60b1f0151023225.6304d2622c234.jpg',
    '/media/Portolio/Hierbica /abdd03151023225.6304d2622c7fb.jpg',
    '/media/Portolio/Hierbica /f9a61d151023225.6304d2603db9f.jpg',
  ],

  modu: [
    '/media/Portolio/Modu/PHOTO-2024-06-25-12-30-10 2.jpg',
    '/media/Portolio/Modu/PHOTO-2024-06-25-12-30-11 3.jpg',
    '/media/Portolio/Modu/Royo_21-06-24-137.jpg',
  ],

  novateam: [
    '/media/Portolio/Novateam/01.jpg',
    '/media/Portolio/Novateam/02.jpg',
  ],

  rer: [
    '/media/Portolio/RER/01.png',
    '/media/Portolio/RER/02.jpg',
    '/media/Portolio/RER/04.jpg',
    '/media/Portolio/RER/05.jpg',
  ],

  'sabor-a-cafe': [
    '/media/Portolio/Sabor a Café/57d8fa186690555.6579cf340dfd8.png',
    '/media/Portolio/Sabor a Café/b0bbf0186690555.6579cf340cbe9.png',
    '/media/Portolio/Sabor a Café/446ead186690555.6579cf3409971.png',
    '/media/Portolio/Sabor a Café/19c8cb186690555.6579cf340f22a.png',
    '/media/Portolio/Sabor a Café/aff862186690555.6579cf340b144.png',
    '/media/Portolio/Sabor a Café/1d18f2186690555.6579cf338f513.png',
  ],

  v16: [
    '/media/Portolio/V16/1df441241252811.6952bfccc5e95.png',
    '/media/Portolio/V16/4e1e5a241252811.6952bfcc5da70.png',
    '/media/Portolio/V16/9433b7241252811.6952bfcd49a9a.png',
    '/media/Portolio/V16/747540241252811.6952bfd199fa3.png',
  ],

  virgin: [
    '/media/Portolio/Virgin/01.jpg',
    '/media/Portolio/Virgin/02.jpg',
    '/media/Portolio/Virgin/03.jpg',
    '/media/Portolio/Virgin/04.jpg',
    '/media/Portolio/Virgin/05.jpg',
    '/media/Portolio/Virgin/06.jpg',
    '/media/Portolio/Virgin/07.jpg',
  ],

  web: [
    '/media/Portolio/Web/6bf9c5140603683.62447c14b2c43.png',
  ]
};


function updateCounter() {
  if (!modalCounter) return;
  modalCounter.textContent = `${currentIndex + 1}/${currentImages.length}`;
}

function openModal(images) {
  currentImages = images;
  currentIndex = 0;
  modalImage.src = currentImages[currentIndex];
  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
  updateCounter();
}

function closeModal() {
  modal.classList.remove('is-active');
  document.body.style.overflow = '';
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
  updateCounter();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
  updateCounter();
}



gridImages.forEach(img => {
  img.addEventListener('click', () => {
    const projectKey = img.dataset.project;
    const images = projects[projectKey];

    if (!images || images.length === 0) {
      console.warn(`No hay imágenes para el proyecto: ${projectKey}`);
      return;
    }

    openModal(images);
  });
});


nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);


closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (!modal.classList.contains('is-active')) return;

  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
