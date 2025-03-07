document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.querySelector(".menu-toggler");
    const closeToggler = document.querySelector(".close-toggler");
    const navList = document.querySelector(".nav-list");
  
    menuToggler.addEventListener("click", function () {
      navList.classList.add("nav-list-active");
    });
  
    closeToggler.addEventListener("click", function () {
      navList.classList.remove("nav-list-active");
    });
  });