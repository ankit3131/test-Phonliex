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


// form Valdation use

const form = document.querySelector('#contactForm');
let names = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let phone = document.getElementById('emails');
let textError = document.querySelectorAll('.textError');

function nameValdation(e) {
e.preventDefault();
console.log('alert')
textError.forEach( (Element , index) =>{
  Element.textContent = "";
}

)
////
if(names.value.trim() === ""){
  debugger;
textError[0].textContent = "Please Enter Name";
}
else {
  textError[0].textContent = "";
 names.classList.add("success"); 
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(email.value.trim() === ""){
  textError[1].textContent = "Please fill up";
}
else if(!emailPattern.test(email.value.trim())){
  debugger;
textError[1].textContent = "email not valid";
}
else{
  textError[1].textContent = "";
}
if(phone.value.trim() === "") {
  textError[2].textContent = "Please Enter Number";
}
else {
  textError[2].textContent = "";
}
if(message.value.trim() === "") {
  textError[3].textContent = "Please review";
}
else {
  textError[3].textContent = "";
}
}

form.addEventListener('submit' , nameValdation);