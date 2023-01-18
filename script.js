const keysPressed = [];
const secretCode = "what";
const numericCode = "732";
let passwordSubmitted = false;

let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

window.addEventListener("keypress", (e) => {
  console.log(e.key);
  keysPressed.push(e.key);
  console.log(keysPressed);

  let attemptedSecret = keysPressed.slice(-secretCode.length);
  if (attemptedSecret.join("") === secretCode && !passwordSubmitted) {
    passwordSubmitted = true;
    clue1.classList.add("hidden");
    button.classList.remove("hidden");
  }

  let attemptedNum = keysPressed.slice(-numericCode.length);
  if (attemptedNum.join("") === numericCode && passwordSubmitted) {
    console.log("KeyCode Submitted");
    page.classList.remove("has-background-black");
    body.innerHTML =
      '<figure class="image center"><img id="main" src="https://zacharytotah.com/wp-content/uploads/2017/09/DiCaprio-Welcome-to-the-Club-Meme.jpg" alt="Welcome to the Club"></figure>';
  }
});

button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});
