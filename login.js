// Email validation regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Login Form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById("login-email");
    const emailError = document.getElementById("login-email-error");
    const passwordInput = document.getElementById("login-password");
    
    let isValid = true;

    // Check if email is empty
    if (!emailInput.value.trim()) {
        emailError.textContent = "Email is required";
        emailError.style.color = "red";
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Incorrect email format";
        emailError.style.color = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    // Check if password is empty
    if (!passwordInput.value.trim()) {
        passwordInput.style.borderColor = "red";
        isValid = false;
    } else {
        passwordInput.style.borderColor = "";
    }

    if (isValid) {
        alert("Login successful!");
        // Proceed with form submission
    }
}

// Validate Register Form
function validateRegisterForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const firstnameInput = document.getElementById("register-firstname");
    const lastnameInput = document.getElementById("register-lastname");
    const emailInput = document.getElementById("register-email");
    const emailError = document.getElementById("register-email-error");
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    let isValid = true;

    // Check if firstname is empty
    if (!firstnameInput.value.trim()) {
        firstnameInput.style.borderColor = "red";
        isValid = false;
    } else {
        firstnameInput.style.borderColor = "";
    }

    // Check if lastname is empty
    if (!lastnameInput.value.trim()) {
        lastnameInput.style.borderColor = "red";
        isValid = false;
    } else {
        lastnameInput.style.borderColor = "";
    }

    // Check if email is empty or invalid
    if (!emailInput.value.trim()) {
        emailError.textContent = "Email is required";
        emailError.style.color = "red";
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Incorrect email format";
        emailError.style.color = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Check if password is empty
    if (!passwordInput.value.trim()) {
        passwordInput.style.borderColor = "red";
        isValid = false;
    } else {
        passwordInput.style.borderColor = "";
    }

    // Check if confirm password matches
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (isValid) {
        alert("Registration successful!");
        // Proceed with form submission
    }
}

// Menu responsiveness
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

// Form switching between login and register
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
