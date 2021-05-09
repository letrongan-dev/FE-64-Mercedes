window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".navbar__container--sticky");
  if (window.scrollY >= 100) {
    navbarFixed.classList.remove("isScrolling");
  } else {
    navbarFixed.classList.add("isScrolling");
  }
};
