// window.onscroll = function () {
//   scrollindicator();
// };

// function scrollindicator() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var element1 = document.getElementById("logo-l");
  element1.classList.toggle("logo-dark");
  var element2 = document.getElementById("logo");
  element2.classList.toggle("logo-dark");
}