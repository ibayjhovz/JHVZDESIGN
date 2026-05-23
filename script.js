
function showGallery(id){

const galleries =
document.querySelectorAll('.gallery-box');

galleries.forEach(gallery => {
gallery.classList.remove('active');
});

document.getElementById(id)
.classList.add('active');

}

window.addEventListener('scroll', () => {

const navbar =
document.querySelector('.navbar');

if(window.scrollY > 50){

navbar.style.background =
'rgba(11,11,15,0.95)';

}else{

navbar.style.background =
'rgba(11,11,15,0.7)';

}

});

emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("appointment-form")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
)

.then(() => {

alert("Appointment Sent Successfully!");

})

.catch((error) => {

alert("Failed To Send Appointment");

console.log(error);

});

});
