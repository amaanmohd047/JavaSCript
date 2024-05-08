'use strict';

// To select all buttons with class show modal
const showModal = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', show);
}

closeModal.addEventListener('click', hide);

overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      hide();
    }
  }
});
