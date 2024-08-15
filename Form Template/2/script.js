document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const passwordStrengthDiv = document.getElementById("password-strength");
    const passwordMatchTooltip = document.getElementById("password-match");
    const addPhoneButton = document.getElementById("add-phone-button");
    const additionalPhonesDiv = document.getElementById("additional-phones");

    passwordInput.addEventListener("input", function () {
        const passwordValue = passwordInput.value;
        let strengthClass = "";

        if (passwordValue.length >= 8) {
            if (/[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
                strengthClass = "strength-strong";
            } else if (/[a-zA-Z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
                strengthClass = "strength-medium";
            } else {
                strengthClass = "strength-weak";
            }
        } else {
            strengthClass = "strength-weak";
        }

        passwordStrengthDiv.className = strengthClass;
    });

    confirmPasswordInput.addEventListener("input", function () {
        if (confirmPasswordInput.value === passwordInput.value) {
            passwordMatchTooltip.textContent = "Passwords match";
            passwordMatchTooltip.style.color = "green";
        } else {
            passwordMatchTooltip.textContent = "Passwords do not match";
            passwordMatchTooltip.style.color = "red";
        }
    });

    addPhoneButton.addEventListener("click", function () {
        const phoneInput = document.createElement("input");
        phoneInput.type = "tel";
        phoneInput.name = "phone";
        phoneInput.placeholder = "Your additional phone number";
        phoneInput.pattern = "[0-9]{10}";
        phoneInput.classList.add("additional-phone");
        phoneInput.required = true;

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-phone-button");
        removeButton.addEventListener("click", function () {
            additionalPhonesDiv.removeChild(phoneInput);
            additionalPhonesDiv.removeChild(removeButton);
        });

        additionalPhonesDiv.appendChild(phoneInput);
        additionalPhonesDiv.appendChild(removeButton);
    });
});
