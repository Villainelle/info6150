document.addEventListener("DOMContentLoaded", function() {
    const from = document.getElementById("from");
    const resultEle = document.getElementById("result");

    from.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const num1 = parseFloat(from.elements["num1"].value);
        const num2 = parseFloat(from.elements["num2"].value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 + num2;
            resultEle.textContent = `Result: ${result}`;
        } else {
            resultEle.textContent = "Please enter valid numbers.";
        }
    });
});
