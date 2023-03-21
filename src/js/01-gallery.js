import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
//console.log(SimpleLightbox);

const galleryRef = document.querySelector('.gallery');
const markup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', markup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title='${description}'/>
</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  captionPosition: 'bottom';
  captionDelay: 250;
  // captionData: "alt";
});
