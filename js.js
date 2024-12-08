// Select elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const photoCounter = document.getElementById('photo-counter');

let currentIndex = 0;

// Update Photo Counter
const updatePhotoCounter = () => {
  photoCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
};

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.classList.remove('hidden');
    lightboxImage.src = item.src;
    currentIndex = index;
    updatePhotoCounter(); // Update counter on open
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Navigate Lightbox
const showImage = (index) => {
  currentIndex = (index + galleryItems.length) % galleryItems.length; // Loop around
  lightboxImage.src = galleryItems[currentIndex].src;
  updatePhotoCounter(); // Update counter on navigation
};

// Event Listeners for Prev/Next
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

// Close Lightbox on Background Click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});
