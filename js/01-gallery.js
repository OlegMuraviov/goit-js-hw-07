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
let newSrc;
function onImageClick(event) {
  event.preventDefault();
  newSrc = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${newSrc}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", eventFn);
      },
      onClose: () => {
        window.removeEventListener("keydown", eventFn);
      },
    }
  );
  const eventFn = (event) => {
    if (event.code === "Escape") return instance.close();
  };
  instance.show();
}
