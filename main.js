document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.zdo_drawer_button');
  const menu = document.querySelector('.zdo_drawer_menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('open'); // メニューの開閉
  });
});