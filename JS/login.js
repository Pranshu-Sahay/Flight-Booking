document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve username and password from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here you would typically send a request to your server to validate the credentials
        // For this example, let's assume authentication is successful
        const isAuthenticated = true; // Replace this with your authentication logic

        if (isAuthenticated) {
            // Store the username in localStorage or session storage for future use
            localStorage.setItem("username", username);

            // Redirect the user to the main page
            window.location.href = "index.html";
        } else {
            // Display an error message or handle authentication failure
            alert("Invalid username or password. Please try again.");
        }
    });
});
