document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("jobApplicationForm");

    const firstName = form.elements["first_name"];
    const lastName = form.elements["last_name"];
    const email = form.elements["email"];
    const jobRole = form.elements["job_role"];
    const address = form.elements["address"];
    const city = form.elements["city"];
    const pincode = form.elements["pincode"];
    const date = form.elements["date"];
    const upload = form.elements["upload"];

    form.addEventListener("submit", function (event) {
        // Reset error messages
        resetErrors();

        // Validate each field
        const firstNameVal = validateName(firstName, "firstNameError");
        const lastNameVal = validateName(lastName, "lastNameError");
        const emailVal = validateEmail(email, "emailError");
        const jobRoleVal = validateSelect(jobRole, "jobRoleError");
        const addressVal = validateText(address, "addressError");
        const cityVal = validateText(city, "cityError");
        const pincodeVal = validateNumber(pincode, "pincodeError");
        const dateVal = validateDate(date, "dateError");
        const uploadVal = validateFile(upload, "uploadError");

        // Check if any validation failed
        if (
            !firstNameVal ||
            !lastNameVal ||
            !emailVal ||
            !jobRoleVal ||
            !addressVal ||
            !cityVal ||
            !pincodeVal ||
            !dateVal ||
            !uploadVal
        ) {
            event.preventDefault(); // Prevent form submission if validation fails
            return false;
        }

        // If all validations pass, you can submit the form here
        console.log("Form is valid. Submitting...");
        // Add your form submission logic here
        return true;
    });

    function validateName(field, errorId) {
        const value = field.value.trim();
        if (value === "") {
            showError(field, errorId, "Please provide a name.");
            return false;
        }

        if (!/^[a-zA-Z ]+$/.test(value)) {
            showError(field, errorId, "Please enter a valid name (only letters and spaces are allowed).");
            return false;
        }

        return value;
    }

    function validateEmail(field, errorId) {
        const emailVal = field.value.trim();

        if (emailVal === "") {
            showError(field, errorId, "Please provide an email.");
            return false;
        }

        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");

        if (atpos < 1) {
            showError(
                field,
                errorId,
                "Your email must include an @ symbol which must not be at the beginning of the email."
            );
            return false;
        }

        if (dotpos - atpos < 2) {
            showError(
                field,
                errorId,
                "Invalid structure: @.\nYou must include a domain name after the @ symbol."
            );
            return false;
        }

        return emailVal;
    }

    function validateSelect(field, errorId) {
        const value = field.value.trim();
        if (value === "") {
            showError(field, errorId, "Please select a job role.");
            return false;
        }
        return value;
    }

    function validateText(field, errorId) {
        const value = field.value.trim();
        if (value === "") {
            showError(field, errorId, "Please provide a value.");
            return false;
        }
        return value;
    }

    function validateNumber(field, errorId) {
        const value = field.value.trim();
        if (value === "" || isNaN(value)) {
            showError(field, errorId, "Please provide a valid number.");
            return false;
        }

        if (value.length !== 6 || !/^\d+$/.test(value)) {
            showError(field, errorId, "Please enter a valid 6-digit pin code.");
            return false;
        }

        return value;
    }

    function validateDate(field, errorId) {
        const value = field.value.trim();
        if (value === "") {
            showError(field, errorId, "Please provide a date.");
            return false;
        }
        // You can add additional date validation logic if needed
        return value;
    }

    function validateFile(field, errorId) {
        const value = field.value.trim();
        if (value === "") {
            showError(field, errorId, "Please upload your CV.");
            return false;
        }
        // You can add additional file validation logic if needed
        return value;
    }

    function showError(field, errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.innerText = message;
        field.classList.add("error");
    }

    function resetErrors() {
        // Reset all error messages and styling
        const errorElements = document.getElementsByClassName("error");
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].innerText = "";
        }

        const formElements = form.elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.remove("error");
        }
    }

    // Clear error messages when the user interacts with the field
    form.addEventListener("input", function (event) {
        const field = event.target;
        const errorId = field.id + "Error";
        const errorElement = document.getElementById(errorId);
        errorElement.innerText = "";
        field.classList.remove("error");
    });
});
