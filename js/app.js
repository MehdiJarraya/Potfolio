const button = document.querySelector(".submit-button"),
  stateMsg = document.querySelector(".pre-state-msg");

const sendMail = function(e) {
  // prevent form form navigation
  e.preventDefault();
  var target = e.target || e.srcElement;

  // Set Form Values to Variables
  var name = target.elements["name"].value;
  var subject = target.elements["subject"].value;
  var email = target.elements["email"].value;
  var message = target.elements["message"].value;

  var data =
    "name=" +
    name +
    "&subject=" +
    subject +
    "&from=" +
    email +
    "&message=" +
    message +
    "&to=mehdi.jarraya@gmail.com";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://portfoliobackk.herokuapp.com/contact");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Requête finie, traitement ici.
      console.log("200");
      finalButtonMsg();
      document.getElementById("contact-beautifull-form").reset();
    }
  };

  xhr.send(data);
  button.classList.add("state-1", "animated");
};

const finalButtonMsg = function() {
  button.classList.add("state-2");

  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
  button.classList.remove("state-1", "state-2", "animated");
};
