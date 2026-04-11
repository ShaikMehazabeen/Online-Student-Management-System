let students = JSON.parse(localStorage.getItem("students")) || [];
function loginStudent() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    if (!username || !password) {
        alert("Enter username and password");
        return;
    }
    let validUser = students.find(
        user => user.username === username && user.password === password
    );
    if (validUser) {
        alert("Login Successful!");
        window.location.href = "../collegewebsite/index.html";
    } else {
        alert("Invalid Username or Password!");
    }
}