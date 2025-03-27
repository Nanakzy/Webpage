document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "flex";
});

document.getElementById("contactFormElement").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    window.location.href = `mailto:pnkzy@yahoo.com?subject=Contact from ${name}&body=${message} (${email})`;
});

 