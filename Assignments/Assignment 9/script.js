document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let errors = [];
        const name = document.getElementById('name').value;
        const yearOfBirth = document.getElementById('yearOfBirth').value;
        const zipcode = document.getElementById('zipcode').value;
        const liveInUS = document.getElementById('liveInUS').checked;
        const password = document.getElementById('password').value;
        const pizzaType = document.getElementById('pizzaType').value;

        // Validate name
        if (name.length < 3) {
            errors.push("Name must be at least 3 characters long.");
        }

        // Validate year of birth
        if (yearOfBirth < 1900 || yearOfBirth > 2100) {
            errors.push("Year of birth must be between 1900 and 2100.");
        }

        // Validate zipcode if the user lives in the US
        if (liveInUS && (!zipcode || zipcode.length !== 5 || !/^\d+$/.test(zipcode))) {
            errors.push("Please enter a valid 5-digit US zipcode.");
        }

        // Validate password
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long.");
        }

        // Validate pizza type selection
        if (!pizzaType) {
            errors.push("Please select your preferred type of pizza.");
        }

        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = ''; // Clear previous messages

        if (errors.length > 0) {
            // Show error messages
            errors.forEach(error => {
                const p = document.createElement('p');
                p.textContent = error;
                p.style.color = "red";
                messageDiv.appendChild(p);
            });
        } else {
            // Show accepted message
            messageDiv.textContent = "Your registration is accepted. Enjoy your pizza!";
            messageDiv.style.color = "green";
        }
    });
});
