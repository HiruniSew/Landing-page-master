document.getElementById("getStartedBtn").addEventListener("click", function () {
  var email = document.getElementById("emailInput").value;
  if (validateEmail(email)) {
    alert("Email is valid. Get started!");
  } else {
    alert("Please enter a valid email address.");
  }
});

function validateEmail(email) {
  // Email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
