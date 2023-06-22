const form = document.getElementById("contactForm");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateFields();
});

// Function to validate name, email, and message
function validateFields() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    document.getElementById("nameError").textContent = "Name cannot be blank.";
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    document.getElementById("nameError").textContent = "";
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    document.getElementById("emailError").textContent =
      "Email cannot be blank.";
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    document.getElementById("emailError").textContent = "";
  }

  if (messageInput.value.trim() === "") {
    isValid = false;
    messageInput.classList.remove("is-valid");
    messageInput.classList.add("is-invalid");
    document.getElementById("messageError").textContent =
      "Message cannot be blank.";
  } else {
    messageInput.classList.remove("is-invalid");
    messageInput.classList.add("is-valid");
    document.getElementById("messageError").textContent = "";
  }

  if (isValid) {
    form.submit();
  }
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
