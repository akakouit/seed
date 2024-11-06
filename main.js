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

(function(){
 var interval = 5000; // 切り替わりの間隔（ミリ秒）
 var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
 $(".fade-img-box img").hide();
 $(".fade-img-box img:first").addClass("active").show();
 
 var changeImage = function(){
 		var $active = $(".fade-img-box img.active");
 		var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");
    
 		$active.fadeOut(fade_speed).removeClass("active");
 		$next.fadeIn(fade_speed).addClass("active");
 }
 
 
 setInterval(changeImage,interval);
 }());