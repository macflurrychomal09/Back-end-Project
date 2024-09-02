// Store users in a simple array for this example (in real cases, use a database)
const users = [];

const form = document.getElementById('form');
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const errorMessage = document.getElementById('error-message');

// Event listeners for toggling between sign-up and sign-in
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to handle registration
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate inputs
    if (isDuplicateName(name)) {
        errorMessage.textContent = 'Name is already taken. Please choose another.';
        return;
    }

    if (isDuplicateEmail(email)) {
        errorMessage.textContent = 'Email is already registered. Please use another.';
        return;
    }

    if (!isValidPassword(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters and not previously used.';
        return;
    }

    // Save new user
    users.push({ name, email, password });
    errorMessage.textContent = 'Registration successful!';

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});

// Function to check if name is already registered
function isDuplicateName(name) {
    return users.some(user => user.name === name);
}

// Function to check if email is already registered
function isDuplicateEmail(email) {
    return users.some(user => user.email === email);
}

// Function to check if password is valid
function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }
    return !users.some(user => user.password === password);
}
