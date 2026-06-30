alert("Script Loaded");

emailjs.init({
  publicKey: "7Q9lvXMYmRZSeBLrs",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_t6t9xa6",
      "template_rraaos7",
      this
    )
    .then(() => {
      alert("Message Sent Successfully!");
      form.reset();
    })
    .catch((error) => {

    console.log(error);

    alert(JSON.stringify(error));

});
});

/*=========================
      Mobile Menu
==========================*/



const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
});
