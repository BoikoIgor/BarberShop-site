(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobile-menu'),
    menuList: document.querySelector('.mobile-menu__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    document.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('visually-hidden');
    refs.openMenuBtn.classList.toggle('visually-hidden');
  }
  function removeMenu() {
    refs.menu.classList.add('visually-hidden');
    document.body.classList.remove('no-scroll');
  }
})();
