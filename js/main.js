window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".navbar__container--sticky");
  let welcome = document.querySelector(".welcome");
  let category = document.querySelector(".category");
  if (window.scrollY >= 100) {
    navbarFixed.classList.remove("isScrolling");
  } else {
    navbarFixed.classList.add("isScrolling");
  }
  if (window.scrollY >= 530) {
    welcome.classList.remove("transtion-view");
    welcome.classList.add("view");
  } else if (window.scrollY <= 528) {
    welcome.classList.remove("view");
    welcome.classList.add("transtion-view");
  }
  if (window.scrollY >= 850) {
    category.classList.remove("transtion-view");
    category.classList.add("view");
  } else if (window.scrollY <= 830) {
    category.classList.remove("view");
    category.classList.add("transtion-view");
  }
  //console.log(window.scrollY);
};
