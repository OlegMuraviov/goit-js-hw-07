import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

class Image {
  constructor({ preview, original, description }) {
    this.alt = description;
    this.src = original;
    this.preview = preview;
  }
}
const galleryEl = document.querySelector(".gallery");
const galleryListEl = document.createElement("ul");
galleryListEl.classList.add("gallery");
for (const element of galleryItems) {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery__item");
  const galleryImageEl = document.createElement("img");
  galleryImageEl.classList.add("gallery__image");
  //   const newImage = new Image(element);
  galleryImageEl.src = element.preview;
  galleryImageEl.alt = element.description;

  galleryListEl.append(galleryItemEl);
  galleryItemEl.append(galleryImageEl);

  console.log(galleryImageEl.attributes);
}
galleryEl.append(galleryListEl);
console.log(galleryListEl);
