// EmailJS Initialization

emailjs.init("7Q9lvXMYmRZSeBLrs");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(

        "service_t6t9xa6",

        "template_rraa0s7",

        this

    )

    .then(function(){

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })

    .catch(function(error){

        alert("❌ Failed to Send Message");

        console.log(error);

    });

});