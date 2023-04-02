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
        Host: "smtp.gmail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: document.getElementById("email").value,
        Subject: "New contact form enquiry",
        Body: "Name:" + document.getElementById("name").value + "<br> Email Id:" + document.getElementById("email").value + "<br>Phone Number: " + document.getElementById("phoneNumber").value + "<br>Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message was sent successfully.Thank you for contacting us.You will receive a reply soon")
    );
}