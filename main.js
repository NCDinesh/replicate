const nav=document.querySelector("nav");
const mobileNav=document.querySelector("nav.mobile-nav");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");

const mobileMenuContainer = document.querySelector(".mobile-menu-container");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset>60){
    nav.classList.add("scrolled"); 
    mobileNav.classList.add("scrolled");  // Add the class to the mobile navigation when scrolling.
  
  } else {
    nav.classList.remove("scrolled");  // Remove the class when scrolling back up to the top.
    mobileNav.classList.remove("scrolled");  // Remove the class from the mobile navigation when scrolling back up to the top.
  }
})

menuIcon.addEventListener("click", ()=>{
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", ()=>{
  mobileMenuContainer.classList.remove("active");
});

