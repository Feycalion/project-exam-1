document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    if (
      !validateFirstName() ||
      !validateLastName() ||
      !validateEmail() ||
      !validateSubject() ||
      !validateMessage()
    ) {
      return;
    }

    alert("Form submitted successfully!");
  });

function validateFirstName() {
  var firstName = document.getElementById("firstName").value;
  if (firstName.length < 5) {
    document.getElementById("firstNameError").innerText =
      "First name must be more than 5 characters.";
    return false;
  }
  return true;
}

function validateLastName() {
  var lastName = document.getElementById("lastName").value;
  if (lastName.length < 5) {
    document.getElementById("firstNameError").innerText =
      "Last name must be more than 5 characters.";
    return false;
  }
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText =
      "Enter a valid email address.";
    return false;
  }
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;
  if (subject.length < 15) {
    document.getElementById("subjectError").innerText =
      "Subject must be more than 15 characters.";
    return false;
  }
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  if (message.length < 25) {
    document.getElementById("messageError").innerText =
      "Message must be more than 25 characters.";
    return false;
  }
  return true;
}

function clearErrors() {
  document.getElementById("firstNameError").innerText = "";
  document.getElementById("lastNameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("subjectError").innerText = "";
  document.getElementById("messageError").innerText = "";
}
