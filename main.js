const nav=document.querySelector("nav");

window.addEventListener("scroll", ()=>{
  if (window.pageYOffset>60){
    nav.classList.add("scrolled"); 
  
  } else {
    nav.classList.remove("scrolled");  // Remove the class when scrolling back up to the top.
  }
})

