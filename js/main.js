window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".navbar__container--sticky");
  let welcome = document.querySelector(".welcome");
  let category = document.querySelector(".category");
  let tab = document.querySelector(".tabs__sticky")
  let text = document.querySelector(".text__content");
  let footerTop = document.querySelector(".footer__top")
  let footerBot = document.querySelector(".footer__bottom")

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
  if (window.scrollY >= 1150) {
    tab.classList.remove("transtion-view");
    tab.classList.add("view");
  }
  else if (window.scrollY <= 1100) {
    tab.classList.remove("view");
    tab.classList.add("transtion-view");
  } 

  if ( window.scrollY >= 3270 &&  window.scrollY <= 5100||  window.scrollY >=5500 ) {
    text.classList.remove("transtion-view");
    text.classList.add("view");
  } else if (window.scrollY <= 3200 || window.scrollY >= 4800 && window.scrollY <= 5400) {
    text.classList.remove("view");
    text.classList.add("transtion-view");
  } 
  if ( window.scrollY >= 3600 &&  window.scrollY <= 5500||  window.scrollY >=5900) {
    footerTop.classList.remove("transtion-view");
    footerTop.classList.add("view");
  }
  else if (window.scrollY <= 3550 || window.scrollY >= 5100 && window.scrollY <= 5700) {
    footerTop.classList.remove("view");
    footerTop.classList.add("transtion-view");
  } 
  if ( window.scrollY >= 4300 &&  window.scrollY <= 6200||  window.scrollY >=6600) {
    footerBot.classList.remove("transtion-view");
    footerBot.classList.add("view");
  }
  else if (window.scrollY <= 4200 ||  window.scrollY >= 5100 && window.scrollY <= 6500 ) {
    footerBot.classList.remove("view");
    footerBot.classList.add("transtion-view");
  } 
    
  // // } else if (window.scrollY <= 5500) {
  //   text.classList.remove("view");
  //   text.classList.add("transtion-view");
  // } 


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
