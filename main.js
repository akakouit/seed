// Menu bar
document.addEventListener("DOMContentLoaded", function () {
  const drawerButton = document.querySelector(".zdo_drawer_button");
  const drawerMenu = document.querySelector(".zdo_drawer_menu");
  drawerButton.addEventListener("click", function () {
    drawerMenu.classList.toggle("open");
  });
});

// Welcome Page (Fullscreen Icon)
window.addEventListener('load', function() {
  const intro = document.getElementById('intro');
  setTimeout(function() {
    intro.style.opacity = '0';
    document.body.classList.add('show-header');
    setTimeout(function() {
      intro.style.display = 'none';
    }, 2000);
  }, 1000);
});