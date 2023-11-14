document.getElementById("getStartedBtn").addEventListener("click", function () {
  var email = document.getElementById("emailInput").value;
  var errorMessage = document.getElementById("error-message");

  if (validateEmail(email)) {
    // Clear any previous error messages and styles
    errorMessage.textContent = "";
    document.getElementById("emailInput").style.border = "2px solid #ccc";

    // Proceed with your logic when the email is valid
    alert("Email is valid. Get started!");
  } else {
    // Display error message and change border color
    errorMessage.textContent = "Please enter a valid email address.";
    document.getElementById("emailInput").style.border = "2px solid red";
  }
});

function validateEmail(email) {
  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
