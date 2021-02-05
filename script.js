var body = document.querySelector('body');
var btnMenu = document.querySelector('.menu');
var btnClose = document.querySelector('.close');
var overlay = document.querySelector('.overlay');
var menuImg = document.querySelector('.menu-img');
var closeImg = document.querySelector('.close-img');
var pills = document.querySelector('.overlay-pills1');

btnMenu.addEventListener("click", openMenu);

function openMenu(){
  body.style.overflow = ("hidden");
  overlay.style.transition = ("width 2s");
  overlay.style.display = ("block");
  menuImg.style.transform = ("rotate(180deg)");
  menuImg.style.transition = (".3s ease-in-out");
  closeImg.style.transform = ("rotate(180deg)");
  closeImg.style.transition = (".3s ease-in-out");
  closeImg.style.transitionDelay = ("0.5s");
  pills.style.transitionDelay = ("1.5s");
  pills.style.transition = ("translateX ease 0.5s");
}

btnClose.addEventListener("click", closeMenu);

function closeMenu(){
  overlay.style.display = ("none");
  body.style.overflow = ("scroll");
  menuImg.style.transform = ("rotate(180deg)");
  menuImg.style.transition = (".4s ease-in-out");
  closeImg.style.transform = ("rotate(180deg)");
  closeImg.style.transition = (".3s ease-in-out");
  menuImg.style.transitionDelay = ("0.5s");
}