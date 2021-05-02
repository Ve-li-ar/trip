const toggleBtn = document.querySelector('.button-burger');
const mainNav = document.querySelector('.main-nav__lists');

document.querySelector('html').classList.remove('no-js');

toggleBtn.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__lists--closed')) {
    mainNav.classList.remove('main-nav__lists--closed');
    mainNav.classList.add('main-nav__lists--opened');
  } else {
    mainNav.classList.add('main-nav__lists--closed');
    mainNav.classList.remove('main-nav__lists--opened');
  }
});

const modal = document.querySelectorAll('.tab-modal');
const modalWindow = document.querySelector('.modal-window');

modal.forEach(item => {
  item.addEventListener('click', selectModal)
});


function selectModal() {
  if (modalWindow.classList.contains('modal-window__inactive')) {
    modalWindow.classList.remove('modal-window__inactive');
    modalWindow.classList.add('modal-window__active');
  } else {
    modalWindow.classList.add('modal-window__active');
    modalWindow.classList.remove('modal-window__inactive');
  }
}



let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__items'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }
};


tab();





//   // import Swiper JS
//   import Swiper from 'swiper';
//   // import Swiper styles
//   import 'swiper/swiper-bundle.css';

//   const swiper = new Swiper('.tab', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
// });
