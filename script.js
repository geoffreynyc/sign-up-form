"use strict";

const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

function validatePassword() {
  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/;

  if (password.value !== confirmPassword.value) {
    passwordError.innerText = "Passwords do not match";
    return false;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.innerText =
      "Password must be 6-15 characters long and contain at least one special character and one number";
    return false;
  }
  passwordError.innerText = "";
  return true;
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
