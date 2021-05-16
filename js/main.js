window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".navbar__container--sticky");
  if (window.scrollY >= 100) {
    navbarFixed.classList.remove("isScrolling");
  } else {
    navbarFixed.classList.add("isScrolling");
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
