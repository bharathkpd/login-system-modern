// Show Signup Form
function showSignup() {
    document.querySelector(".form-box").classList.add("hidden");
    document.getElementById("signupBox").classList.remove("hidden");
}

// Show Login Form
function showLogin() {
    document.querySelector(".form-box").classList.remove("hidden");
    document.getElementById("signupBox").classList.add("hidden");
}

// Signup Function
function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    const userData = {
        name,
        email,
        password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Account created successfully!");

    showLogin();
}

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No user found. Please sign up first!");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password!");
    }
}
