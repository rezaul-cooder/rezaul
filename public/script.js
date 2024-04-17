
// typing animation script

var  typed = new Typed(".auto-type", {
    strings : ["Front-End Developer" , " Expert in Device Responsiveness" , " Expert in Frameworks and Libraries"],
    typeSpeed : 70,
    backSpeed : 20,
    loop:true

})

//typing animation script end.




let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  if (index >= slides.length) {slideIndex = 0;}
  if (index < 0) {slideIndex = slides.length - 1;}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}






function Send(){
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var Mess = document.getElementById("message").value;
  var desh = document.getElementById("Country").value;
      
  var body = "Name:  " + name +"<br/> Email:" + email  +  "<br/> message :" + Mess + "<br/> Country :" +  desh ;
 
  console.log(body);

   Email.send({
  
   SecureToken : "72555024-6329-419d-ba19-ff5e8c2054ae ",
   To : 'rezaulhussen2@gmail.com',
   From : "rezaulhussen2@gmail.com",
   Subject : "Hiring Rezaul-Font-End Developer",
   Body : body
   }).then(
       message => {
         if(message=='OK'){
             swal("Thank's For Contacting Me !", "I Will Back To You As Soon As Possible", "success");
         }
         else{
             swal("Something May Wrong  !", "Your Message is not Recived ", "error");
         }
       }
    );
 }

 function showSweetAlert() {
  swal("Responsive SweetAlert", "This is a responsive SweetAlert!", "success");}



  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar ul a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


//=================================   nav responsive codes.
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('#close-icon');
  const navLinks = document.querySelector('.nav-links');

  // Function to open the mobile nav
  function openNav() {
      navLinks.classList.add('active');
      closeIcon.style.display = 'block';
      menuIcon.style.display = 'none';
  }

  // Function to close the mobile nav
  function closeNav() {
      navLinks.classList.remove('active');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
  }

  // Event listener for opening and closing the mobile nav
  menuIcon.addEventListener('click', function () {
      openNav();
  });

  closeIcon.addEventListener('click', function () {
      closeNav();
  });
  
});





