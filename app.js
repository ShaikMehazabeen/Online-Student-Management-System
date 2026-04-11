function goRegister() {
    var message = document.getElementById("msg");
    message.innerHTML = "Registration successfully completed";
    message.style.display = "block";

    setTimeout(function() {
        window.location.href = "../register/index.html";
    }, 2000); // 2 seconds delay
}
