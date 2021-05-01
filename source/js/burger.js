const toggleBtn = document.querySelector('.button-burger');
const mainNav = document.querySelector('.main-nav__lists');

const setToggleBtn = () => {
  toggleBtn.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav__lists--closed')) {
      mainNav.classList.remove('main-nav__lists--closed');
      mainNav.classList.add('main-nav__lists--opened');
    } else {
      mainNav.classList.add('main-nav__lists--closed');
      mainNav.classList.remove('main-nav__lists--opened');
    }
  }
  );
}

export { setToggleBtn };
