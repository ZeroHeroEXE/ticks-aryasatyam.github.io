// Get the register button element
const registerButton = document.getElementById('register');

// Add an event listener to the register button
registerButton.addEventListener('click', validateForm);

function validateForm(event) {
  event.preventDefault();

  // Clear previous errors
  clearErrors();

  // Validate email
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
  }

  // Validate password
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
  }

  // Validate confirmpassword
  const confirmpasswordInput = document.getElementById('confirmpassword');
  const confirmpasswordError = document.getElementById('confirmpasswordError');
  if (confirmpasswordInput.value !== passwordInput.value) {
    confirmpasswordError.textContent = 'Passwords do not match.';
  }

  // Validate phone number
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (!phoneInput.checkValidity()) {
    phoneError.textContent = 'Please enter a valid phone number.';
  }

  // Validate gender
  const genderInputs = document.getElementsByName('genderBtn');
  const genderError = document.getElementById('genderError');
  let isGenderSelected = false;
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      isGenderSelected = true;
      break;
    }
  }
  if (!isGenderSelected) {
    genderError.textContent = 'Please select a gender.';
  }

  // Validate terms and conditions
  const termsInput = document.getElementById('terms');
  const termsError = document.getElementById('termsError');
  if (!termsInput.checked) {
    termsError.textContent = 'You must agree to the terms and conditions.';
  }

  // If there are no errors, display the pop-up notification and redirect the user
  if (formIsValid()) {
    alert('Register Succeed');
    window.location.href = 'index.html';
  }
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}

function formIsValid() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    if (errorElements[i].textContent !== '') {
      return false;
    }
  }
  return true;
}
