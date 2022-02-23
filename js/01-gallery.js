import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGridPicture(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

galleryEl.addEventListener("click", onImageClick);

function onPressKey(event) {
  console.log(event.key);
}

function createGridPicture(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    )
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  const newSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${newSrc}" width="800" height="600">
`);
  instance.show();
  const eventFn = (event) => {
    if (event.code === "Escape") {
      document.removeEventListener("keydown", eventFn);
      return instance.close();
    }
  };
  document.addEventListener("keydown", eventFn);
}
