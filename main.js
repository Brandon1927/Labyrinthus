// Variables del lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll("img[class^='img']"); // Selecciona todas las imágenes cuya clase empieza con 'img'

let currentIndex = 0;

// Función para abrir el lightbox
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = galleryImages[index].src;
  console.log(`Abriendo lightbox para la imagen en el índice: ${index}`);
}

// Función para cerrar el lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Función para mostrar la siguiente imagen
function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Función para mostrar la imagen anterior
function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Asignamos el evento a cada imagen para abrir el lightbox al hacer clic
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log(`Imagen ${index + 1} clickeada`); // Esto te dirá si se está disparando el evento
    openLightbox(index);
  });
});

// Evento para cerrar el lightbox
closeBtn.addEventListener("click", closeLightbox);

// Cerrar lightbox al hacer clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Navegación con teclado
window.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    }
  });