const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

input.addEventListener("input", validateInput);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("logando..."); 
  console.log(input.value); 
  localStorage.setItem("player", input.value); 
  window.location = "/src/pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
