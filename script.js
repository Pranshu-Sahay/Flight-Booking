
function toggleOptions(containerId) 
{
    const optionsContainer = document.getElementById(containerId);
    optionsContainer.classList.toggle('active'); // Toggle the 'active' class
}




function insertFormHTML() 
{
    const formContainer = document.getElementById('formContainer');
    // Trigger reflow to apply the animation
    void formContainer.offsetWidth;
    formContainer.style.opacity = '1'; // Show the form container after reflow
}


function selectOption(value, inputId) 
{
    const inputElement = document.getElementById(inputId);
    inputElement.value = value;
    const optionsContainer = document.getElementById(inputId + 'Options');
    optionsContainer.classList.remove('active'); // Hide options after selection
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
economyClassOption.addEventListener('click', () => {
    if (firstLoad) {
        firstLoad = false;
        insertFormHTML();
    } else {
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
businessClassOption.addEventListener('click', () => {
    if (firstLoad) {
        firstLoad = false;
        insertFormHTML();
    } else {
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
firstClassOption.addEventListener('click', () => {
    if (firstLoad) {
        firstLoad = false;
        insertFormHTML();
    } else {
        setTimeout(() => {
            document.getElementById('formContainer').style.opacity = '0'; // Hide the form container before reloading
            setTimeout(() => {
                insertFormHTML();
            }, 500); // Wait for the animation duration before reloading
        }, 3000); // 3-second delay
    }
});

