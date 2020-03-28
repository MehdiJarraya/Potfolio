const button = document.querySelector(".submit-button"),
  stateMsg = document.querySelector(".pre-state-msg");

const sendMail = function(e) {
    console.log("e", e);
  // prevent form form navigation
  e.preventDefault();
  button.classList.add("state-1", "animated");

  setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function() {
  button.classList.add("state-2");

  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
  button.classList.remove("state-1", "state-2", "animated");
};

