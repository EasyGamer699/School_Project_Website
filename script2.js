const generateBtn = document.getElementById("generate-btn");
const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");


const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";


function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordField.value = password;
}


lengthSlider.addEventListener('input', function () {
    lengthValue.textContent = lengthSlider.value;
    generatePassword(lengthSlider.value);
});


generateBtn.addEventListener('click', function () {
    generatePassword(lengthSlider.value);
});


generatePassword(lengthSlider.value);
