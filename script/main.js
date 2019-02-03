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
  $('img.logo-light').toggleClass('logo-dark');
  $('img.logo-light-1').toggleClass('logo-dark-1');
}