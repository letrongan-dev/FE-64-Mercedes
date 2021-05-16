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
};

function myFunction() {
  var hidenItem = document.querySelector(".hide--1");
  var btnText = document.getElementById("myBtn");
  if (hidenItem.style.display === "none") {
    hidenItem.style.display = "block";
    btnText.style.display = "none";
  } else {
    hidenItem.style.display = "none";
    btnText.innerHTML = "See more";
  }
}

function myFunction_2() {
  var hidenItem = document.querySelector(".hide--2");
  var btnText = document.getElementById("myBtn_2");
  if (hidenItem.style.display === "none") {
    hidenItem.style.display = "block";
    btnText.style.display = "none";
  } else {
    hidenItem.style.display = "none";
    btnText.innerHTML = "See more";
  }
}

function myFunction_3() {
  var hidenItem = document.querySelector(".hide--3");
  var btnText = document.getElementById("myBtn_3");
  if (hidenItem.style.display === "none") {
    hidenItem.style.display = "block";
    btnText.style.display = "none";
  } else {
    hidenItem.style.display = "none";
    btnText.innerHTML = "See more";
  }
}
