/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [X] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button

let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleLightMode = () => {
  document.body.classList.toggle("light-mode");
}

// Step 3: Register a 'click' event listener for the theme button
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener('click', toggleLightMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

const rsvpButton = document.querySelector("#rsvp-button");

const addParticipant = (person) => {
  // Step 2: Write your code to manipulate the DOM here
  //appending to DOM
  const participant = document.createElement("p");
  participant.innerText = `🎟️ ${person.name} from ${person.hometown} has RSVP'd.`;
  document.querySelector(".rsvp-participants").appendChild(participant);
}


/*** Form Validation ***/

const validateForm = (event) => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  };

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    // TODO: Inside loop, validate the value of each input
    if (person.hometown.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
      event.preventDefault();
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  if (containsErrors === false) {
    addParticipant(person);
    toggleModal(person);

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);

const toggleModal = (person) => {
  let modal = document.querySelector("#success-modal");
  let modalContent = document.querySelector("#modal-text");

  // TODO: Update modal display to flex

  modal.style.display = "flex";

  // TODO: Update modal text to personalized message

  modalContent.innerHTML = `The Mad Hatter gladly accepts your reservation, ${person.name} <br>
                        <br> ♦♦♦♦♦♦
                        <br>
                        <br>
                        Tea and refreshments will be made posthaste. We look forward to having a very mad time together.</p>`

  // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalID);
  }, 4000);

  let intervalID = setInterval(animateImage, 500);
}

// TODO: animation variables and animateImage() function 

let rotateFactor = 0;
let modalImage = document.querySelector("#modal-img");

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}