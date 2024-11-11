///categories section  scrolling
function toggleNavbar() {
  const navbar = document.getElementById("navbarNav");
  navbar.classList.toggle("show");
}

//JavaScript for Scroll Trigger
const scrollElement = document.getElementById("scrollElement");
document.addEventListener("scroll", function () {
  const container = document.querySelector(".imge_scroll");
  const triggerPoint = container.offsetTop - window.innerHeight / 2;

  if (window.scrollY > triggerPoint) {
    container.classList.add("scrolled");
    scrollElement.classList.add("categry1");
  } else {
    container.classList.remove("scrolled");
    scrollElement.classList.add("categery1");
  }
});

function checkScrollAndRemoveClass() {
  if (window.scrollY > 0) {
  } else {
  }
}
window.addEventListener("scroll", checkScrollAndRemoveClass);



///scrolling use work
function animateOnScroll() {
  const animatedElements  = document.querySelectorAll('.fade-left, .fade-right, .zoom-in,.zoom-out ,.fade-in-up, .fade-in-down ,.fade-rotate');
  console.log(animatedElements);
animatedElements.forEach(Element => {
const rect = Element.getBoundingClientRect();
const windowHeight = window.innerHeight || document.documentEelement.clienHeight;

// Check if the element is in the viewport
if(rect.top <= windowHeight && rect.bottom >= 0){
  Element.classList.add('active');
}
else{
  Element.classList.remove('active');
}
})
  
}

// Add scroll event listener
window.addEventListener('scroll' , animateOnScroll);


// Initial check in case elements are in view on load
animateOnScroll();



// Mouse hover button 

const button = document.querySelectorAll('.btn_card1');
const button1 = document.querySelectorAll('.btn_card');

button.forEach((button) => {
button.addEventListener('mouseenter' , () =>{
button.classList.add('hovered');

});

button.addEventListener('mouseleave' , ()=>{
  button.classList.remove('hoverd');
  button.classList.add('expand');
})
});
