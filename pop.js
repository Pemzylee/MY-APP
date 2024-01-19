let createbtn = document.getElementById('create-btn')
let signupcont = document.querySelector('.signup-cont')
let logincont = document.querySelector('.login-cont')

createbtn.addEventListener('click', signupfunction)
function signupfunction() {
    logincont.style.display = 'none';
    signupcont.style.display = 'block';
}

let backtologin = document.getElementById('back-to-login')

backtologin.addEventListener('click', backtologinfunction)
function backtologinfunction(event) {
    event.preventDefault();
    logincont.style.display = 'block';
    signupcont.style.display = 'none';
}


let modal = document.getElementById('modal')
let btn = document.getElementById('loginbtn')

btn.addEventListener('click', function (event) {
    event.preventDefault();
    validateStep();
});


// Validation function for the name field in login section
function validateName() {
    let inputLoginName = document.getElementById('input-name');
    let errorLoginName = document.getElementById('errorName');

    if (!/\w{5,8}/.test(inputLoginName.value.trim())) {
        inputLoginName.style.border = '1px solid hsl(4, 100%, 67%)';
        errorLoginName.textContent = 'This field is required.';
        return false;
    } else {
        inputLoginName.style.border = '';
        errorLoginName.style.display = 'none';
        return true;
    }
}

// Validation function for the password field in login section
function validatePassword() {
    let inputLoginPassword = document.getElementById('input-password');
    let errorLoginPassword = document.getElementById('errorPassword');

    // Password criteria
    let minLength = 8;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let digitRegex = /\d/;

    // Check if the password meets the criteria
    if (
        inputLoginPassword.value.length < minLength ||
        !uppercaseRegex.test(inputLoginPassword.value) ||
        !lowercaseRegex.test(inputLoginPassword.value) ||
        !digitRegex.test(inputLoginPassword.value)
    ) {
        inputLoginPassword.style.border = '1px solid hsl(4, 100%, 67%)';
        errorLoginPassword.textContent = 'Invalid Password.';
        return false;
    } else {
        inputLoginPassword.style.border = '';
        errorLoginPassword.textContent = ''; // Clear any previous error message
        return true;
    }
}


// Modify the validateStep function to call the validation functions
function validateStep() {
    // Validate the name, email, and phone number fields
    let isNameValid = validateName();
    let isEmailValid = validatePassword();
    // let isPhoneNumberValid = validatePhoneNumber();

    if (!isNameValid || !isEmailValid) {
      return;
    }

    modal.style.display = 'none';
    // step2.style.display = 'block';
}




let signupbtn = document.getElementById('signup-btn')

signupbtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateSignupStep();
});

let signupCont = document.getElementById('signup-container')
let phoneNumber = document.getElementById('phone-number-validation') 

// Validation function for the email field in signup section
function validateEmail() {
    let inputEmail = document.getElementById('input-email-signup');
    let errorEmail = document.getElementById('errorEmailSignup');

    let emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(inputEmail.value.trim())) {
        inputEmail.style.border = '1px solid hsl(4, 100%, 67%)';
        errorEmail.textContent = 'This field is required';
        return false;
    } else {
        inputEmail.style.border = '';
        errorEmail.style.display = 'none';
        return true;
    }
}

// Validation function for the name field in signup section
function validateNameSignup() {
    let inputName = document.getElementById('input-name-signup');
    let errorName = document.getElementById('errorNameSignup');

    if (!/\w{5,8}/.test(inputName.value.trim())) {
        inputName.style.border = '1px solid hsl(4, 100%, 67%)';
        errorName.textContent = 'This field is required';
        return false;
    } else {
        inputName.style.border = '';
        errorName.style.display = 'none';
        return true;
    }
}

// Validation function for the password field in signup section
function validatePasswordSignup() {
    let inputPassword = document.getElementById('input-password-signup');
    let errorPassword = document.getElementById('errorPasswordSignup');

    // Password criteria
    let minLength = 8;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let digitRegex = /\d/;

    if (
        inputPassword.value.length < minLength ||
        !uppercaseRegex.test(inputPassword.value) ||
        !lowercaseRegex.test(inputPassword.value) ||
        !digitRegex.test(inputPassword.value)
    ) {
        inputPassword.style.border = '1px solid hsl(4, 100%, 67%)';
        errorPassword.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter and one digit.';
        return false;
    } else {
        inputPassword.style.border = '';
        errorPassword.textContent = ''; // Clear any previous error message
        return true;
    }
}

// Validation function for re-enter password field in signup section
function validateRetypePasswordSignup() {
    let password = document.querySelector('input[name="password"]');
    let confirmPassword = document.getElementById('confirm_password_signup');
    let errorRetypePassword = document.getElementById('errorRetypePasswordSignup');

    if (password.value == confirmPassword.value) {
        confirmPassword.style.border = '1px solid hsl(4, 100%, 67%)';
        errorRetypePassword.textContent = 'Passwords do not match';
        return false;
        
    } else {
        confirmPassword.style.border = '';
        errorRetypePassword.textContent = '';
        return true;
    }
    
    // console.log('Password:', password.value);
    // console.log('Confirm Password:', confirmPassword.value);
}

// Modify the validateSignupStep function to call the validation functions for signup
function validateSignupStep() {
    let inputEmail = document.getElementById('input-email-signup');
    let inputUsername = document.getElementById('input-name-signup');
    let inputPassword = document.getElementById('input-password-signup');
    let confirmPassword = document.getElementById('confirm_password_signup');
    let errorEmail = document.getElementById('errorEmailSignup');
    let errorUsername = document.getElementById('errorNameSignup');
    let errorPassword = document.getElementById('errorPasswordSignup');
    let errorRetypePassword = document.getElementById('errorRetypePasswordSignup');

    let isEmailValid = validateEmail(inputEmail, errorEmail);
    let isUsernameValid = validateNameSignup(inputUsername, errorUsername);
    let isPasswordValid = validatePasswordSignup(inputPassword, errorPassword);
    let isRetypePasswordValid = validateRetypePasswordSignup(inputPassword, confirmPassword, errorRetypePassword);

    if (!isEmailValid || !isUsernameValid || !isPasswordValid || !isRetypePasswordValid) {
        return;
    }

    signupCont.style.display = 'none';
    phoneNumber.style.display = 'block';
}




function searchFunction() {
    let searchInput = document.getElementById('search-input').value;

    // Determine if the input is an email or username
    if (isEmail(searchInput)) {
        // Implement search by email logic
        console.log('Searching by email:', searchInput);
    } else {
        // Implement search by username logic
        console.log('Searching by username:', searchInput);
    }
}

// Helper function to check if the input is an email
function isEmail(input) {
    // Simple email validation regex
    let emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(input);
}