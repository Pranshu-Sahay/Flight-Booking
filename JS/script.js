
function toggleOptions(containerId) {
    const optionsContainer = document.getElementById(containerId);
    optionsContainer.classList.toggle('active'); // Toggle the 'active' class
}

// Declare the selectedOptionsTable variable
const selectedOptionsTable = document.getElementById('selectedOptions');

// Function to update the summary table with the selected class name and form details
function updateSummary(className, departure, destination, travellers, departureDate, returnDate) {
    // Clear existing rows
    selectedOptionsTable.innerHTML = '';

    // Create a new row with the selected class name and form details
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${className}</td>
        <td>${departure}</td>
        <td>${destination}</td>
        <td>${travellers}</td>
        <td>${departureDate}</td>
        <td>${returnDate}</td>
        <td><button class="book-btn">Book</button></td> 
    `;

    // Append the new row to the table body
    selectedOptionsTable.appendChild(row);
}

// Function to clear form inputs
function clearFormInputs() {
    document.getElementById('departureInput').value = '';
    document.getElementById('destinationInput').value = '';
    document.querySelector('input[type="number"]').value = '';
    document.getElementById('departureDate').value = '';
    document.getElementById('returnDate').value = '';
}


function isAuthenticated() {
    // Check if the user is authenticated (e.g., by checking for a stored token)
    // Return true if authenticated, false otherwise
    const username = localStorage.getItem('username');
    return !!username; // Return true if username exists, false otherwise
}


// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission


    if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        window.location.href = 'login.html';
        return; // Stop further execution
    }


    // Retrieve form input values
    const departure = document.getElementById('departureInput').value;
    const destination = document.getElementById('destinationInput').value;
    const travellers = document.querySelector('input[type="number"]').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Update localStorage with form input values
    localStorage.setItem('departure', departure);
    localStorage.setItem('destination', destination);
    localStorage.setItem('travellers', travellers);
    localStorage.setItem('departureDate', departureDate);
    localStorage.setItem('returnDate', returnDate);

    // Update summary with latest form details
    const selectedClass = document.querySelector(".booking__nav .class-option.selected");
    if (selectedClass) {
        handleClassOptionClick(selectedClass);
    }

    // Clear the form inputs
    clearFormInputs();
}

// Event listener for clicking on the search button
document.querySelector('form').addEventListener('submit', handleFormSubmission);

// Rest of your existing code...



// Function to handle class option click
function handleClassOptionClick(option) {
    // Reset all options to default style
    const classOptions = document.querySelectorAll(".booking__nav .class-option");
    classOptions.forEach(opt => {
        opt.style.backgroundColor = "var(--extra-light)";
        opt.style.color = "var(--text-light)";
    });

    // Apply selected style to the clicked option
    option.style.backgroundColor = "var(--primary-color)";
    option.style.color = "var(--white)";

    // Update summary with selected class name and form details
    const className = option.textContent;
    const departure = localStorage.getItem('departure');
    const destination = localStorage.getItem('destination');
    const travellers = localStorage.getItem('travellers');
    const departureDate = localStorage.getItem('departureDate');
    const returnDate = localStorage.getItem('returnDate');
    updateSummary(className, departure, destination, travellers, departureDate, returnDate);

    // Reset opacity of form container
    document.getElementById('formContainer').style.opacity = '0';
    setTimeout(() => {
        insertFormHTML(); // Reload form container with opacity animation
    }, 500);
}



function updateNavigationButtons(username) {
    const loginButtons = document.querySelector('.Log_in');
    loginButtons.innerHTML = `<p>Welcome, ${username}</p>`; // Display the username
}







// Function to clear form inputs
function clearFormInputs() {
    document.getElementById('departureInput').value = '';
    document.getElementById('destinationInput').value = '';
    document.querySelector('input[type="number"]').value = '';
    document.getElementById('departureDate').value = '';
    document.getElementById('returnDate').value = '';
}

// Function to clear the summary table
function clearSummaryTable() {
    selectedOptionsTable.innerHTML = '';
}

// Function to handle class option click
function handleClassOptionClick(option) {
    // Clear the summary table
    clearSummaryTable();

    // Reset all options to default style
    const classOptions = document.querySelectorAll(".booking__nav .class-option");
    classOptions.forEach(opt => {
        opt.style.backgroundColor = "var(--extra-light)";
        opt.style.color = "var(--text-light)";
    });

    // Apply selected style to the clicked option
    option.style.backgroundColor = "var(--primary-color)";
    option.style.color = "var(--white)";

    // Update summary with selected class name and form details
    const className = option.textContent;
    updateSummary(className);
}

// Event listener for class options
document.querySelectorAll(".booking__nav .class-option").forEach(option => {
    option.addEventListener("click", function () {
        handleClassOptionClick(option);
    });
});

// Event listener for clicking on the search button
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    const departure = document.getElementById('departureInput').value;
    const destination = document.getElementById('destinationInput').value;
    const travellers = document.querySelector('input[type="number"]').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Clear the summary table
    clearSummaryTable();

    // Update summary with latest form details
    const selectedClass = document.querySelector(".booking__nav .class-option.selected");
    if (selectedClass) {
        handleClassOptionClick(selectedClass);
    }

    // Clear the form inputs
    clearFormInputs();
});

// Function to handle page load
document.addEventListener("DOMContentLoaded", function () {
    // Clear the form inputs and summary table
    clearFormInputs();
    clearSummaryTable();
});






document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is authenticated
    const username = localStorage.getItem("username");
    if (username) 
    {
        // If authenticated, update the navigation buttons with the username
        updateNavigationButtons(username);
    }
});

function updateNavigationButtons(username) {
    const loginButtons = document.querySelector('.Log_in');
    if (username) {
        loginButtons.innerHTML = `<p>Welcome, ${username}</p><button id="logoutBtn" class="btn">Logout</button>`;
        document.getElementById('logoutBtn').addEventListener('click', function () 
        {
            localStorage.removeItem('username');
            // Redirect to the login page
            window.location.href = 'index.html';
        });
    } else 
    {
        loginButtons.innerHTML = `<button class="btn"><a href="login.html" class="btn">Log In</a></button><button class="btn"><a href="signup.html" class="btn">Sign Up</a></button>`;
    }
}
















// Event listener for class options
document.querySelectorAll(".booking__nav .class-option").forEach(option => {
    option.addEventListener("click", function () {
        handleClassOptionClick(option);
    });
});

// Event listener for clicking on the search button
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    const departure = document.getElementById('departureInput').value;
    const destination = document.getElementById('destinationInput').value;
    const travellers = document.querySelector('input[type="number"]').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Update localStorage with form input values
    localStorage.setItem('departure', departure);
    localStorage.setItem('destination', destination);
    localStorage.setItem('travellers', travellers);
    localStorage.setItem('departureDate', departureDate);
    localStorage.setItem('returnDate', returnDate);

    // Update summary with latest form details
    const selectedClass = document.querySelector(".booking__nav .class-option.selected");
    if (selectedClass) {
        handleClassOptionClick(selectedClass);
    }

    // Reset the form
    document.querySelector('form').reset();
});

// Rest of your existing code...









function insertFormHTML() 
{
    const formContainer = document.getElementById('formContainer');
    // Trigger reflow to apply the animation
    void formContainer.offsetWidth;
    formContainer.style.opacity = '1'; // Show the form container after reflow
}


function selectOption(value, inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.value = value;
    const optionsContainer = document.getElementById(inputId + 'Options');
    if (optionsContainer) {
        optionsContainer.classList.remove('active'); // Hide options after selection
    } else {
        console.error('Options container not found:', inputId + 'Options');
    }
}




let firstLoad = true;



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("home-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#home').scrollIntoView
            ({
                behavior: 'smooth'
            });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("book-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#book').scrollIntoView
            ({
                behavior: 'smooth'
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("about-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView
            ({
                behavior: 'smooth'
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView
            ({
                behavior: 'smooth'
            });
    });
});







// Event listener for economy class
const economyClassOption = document.querySelector('.economy-class');
economyClassOption.addEventListener('click', () => 
    {
        
    if (firstLoad) 
    {
        firstLoad = false;
        insertFormHTML();
    } else 
    {
       
        setTimeout(() => {
            document.getElementById('formContainer').style.opacity = '0'; // Hide the form container before reloading
            setTimeout(() => {
                insertFormHTML();
            }, 500); // Wait for the animation duration before reloading
        }, 3000); // 3-second delay
    }
});

// Event listener for business class
const businessClassOption = document.querySelector('.business-class');
businessClassOption.addEventListener('click', () => 
    {
        
    if (firstLoad) {
        firstLoad = false;
        insertFormHTML();
    } else 
    {
        
        setTimeout(() => {
            document.getElementById('formContainer').style.opacity = '0'; // Hide the form container before reloading
            setTimeout(() => {
                insertFormHTML();
            }, 500); // Wait for the animation duration before reloading
        }, 3000); // 3-second delay
    }
});

// Event listener for first class
const firstClassOption = document.querySelector('.first-class');
firstClassOption.addEventListener('click', () => 
    {
        
    if (firstLoad) {
        firstLoad = false;
        insertFormHTML();
    } else 
    {
        
        setTimeout(() => {
            document.getElementById('formContainer').style.opacity = '0'; // Hide the form container before reloading
            setTimeout(() => {
                insertFormHTML();
            }, 500); // Wait for the animation duration before reloading
        }, 3000); // 3-second delay
    }
});

