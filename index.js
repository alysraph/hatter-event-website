
// Step 1: Select the theme button

let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleLightMode = () => {
  document.body.classList.toggle("light-mode");
  document.html.classList.toggle("light-mode");
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

const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here
  const name = document.querySelector("#name").value;
  const address = document.querySelector("#address").value;
  const email = document.querySelector("#email").value;

  //appending to DOM
  const participant = document.createElement("p");
  participant.innerText = `🎟️ ${name} from ${address} has RSVP'd.`;
  document.querySelector(".rsvp-participants").appendChild(participant);
  event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here

rsvpButton.addEventListener("click", addParticipant);