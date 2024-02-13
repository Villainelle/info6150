document.addEventListener("DOMContentLoaded", function () {
    function generateLibraryCardNumber() {
        let form = document.getElementById("registerForm");
        if(!form.checkValidity()) {
            return;
        }
        var cardNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        localStorage.setItem("libraryCardNumber", cardNumber);
        window.alert("Generated successfully")
        // Display the generated card number
        document.getElementById("libraryCardNumber").textContent = "Your Library Card Number: " + cardNumber;
    };
    document.getElementById("generateCardButton").addEventListener("click", generateLibraryCardNumber);
    var storedCardNumber = localStorage.getItem("libraryCardNumber");
    if (storedCardNumber) {
        // Display the stored card number
        document.getElementById("libraryCardNumber").textContent = "Your Library Card Number: " + storedCardNumber;
    }
});
