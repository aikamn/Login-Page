function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";  // Reset error message

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;  // Prevent form submission
    }

    if (username !== "admin" || password !== "1234") {
        errorMessage.textContent = "Invalid username or password!";
        return false;  // Prevent form submission
    }

    alert("Login successfull");
    return true;  // Allow form submission
}