require("dotenv").config();

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


function sendEmail() {
    Email.send({
        SecureToken: "b0d93b31-6151-44c5-8564-3a60df933404",
        To: 'saarthiyourmentor@gmail.com',

        From: 'saarthiyourmentor@gmail.com',
        Subject: "New contact form enquiry",
        Body: "Name: " + document.getElementById("name").value + "<br>Email Id: " + document.getElementById("email").value + "<br>Phone Number: " + document.getElementById("phoneNumber").value + "<br>Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message was sent successfully. Thank you for contacting us. You will receive a reply soon.")
    );
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("message").value = "";
    // alert("Message was sent successfully. Thank you for contacting us. You will receive a reply soon.")
}

