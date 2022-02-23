import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGridPicture(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

galleryEl.addEventListener("click", onImageClick);

function createGridPicture(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    )
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  const newSrc = event.target.dataset.source;
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });
}
