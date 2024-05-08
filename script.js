// Function to dynamically insert the form HTML into the container
function insertFormHTML() {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
    <form>
      <!-- Form content -->
      <div class="form__group">
        <span><i class="ri-map-pin-line"></i></span>
        <div class="input__content">
          <div class="input__group">
            <input type="text" />
            <label>From</label>
          </div>
          <p>Departure location</p>
        </div>
      </div>
      <div class="form__group">
        <span><i class="ri-map-pin-line"></i></span>
        <div class="input__content">
          <div class="input__group">
            <input type="text" />
            <label>To</label>
          </div>
          <p>Destination location</p>
        </div>
      </div>
      <div class="form__group">
        <span><i class="ri-user-3-line"></i></span>
        <div class="input__content">
          <div class="input__group">
            <input type="number" />
            <label>Travellers</label>
          </div>
          <p>Add guests</p>
        </div>
      </div>
      <div class="form__group">
        <span><i class="ri-calendar-line"></i></span>
        <div class="input__content">
          <div class="input__group">
            <input type="text" />
            <label>Departure</label>
          </div>
          <p>Add date</p>
        </div>
      </div>
      <div class="form__group">
        <span><i class="ri-calendar-line"></i></span>
        <div class="input__content">
          <div class="input__group">
            <input type="text" />
            <label>Return</label>
          </div>
          <p>Add date</p>
        </div>
      </div>
      <button class="btn"><i class="ri-search-line"></i></button>
    </form>
  `;
    // Trigger reflow to apply the animation
    void formContainer.offsetWidth;
    formContainer.style.opacity = '1'; // Show the form container after reflow
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

