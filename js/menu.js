(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-list'),
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
