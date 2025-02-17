document.addEventListener("DOMContentLoaded", function () {
    const historyDisplay = document.querySelector(".history");
    const resultDisplay = document.querySelector(".result");
    const buttons = document.querySelectorAll(".btn");
    const equalButton = document.querySelector(".equal");

    let history = "";
    let currentInput = "";

    // Function to update the display
    function updateDisplay() {
        historyDisplay.textContent = history;
        resultDisplay.textContent = currentInput || "0";
    }

    // Handle button clicks
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (value === "C") {
                history = "";
                currentInput = "";
            } else if (value === "delete") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "%") {
                if (currentInput !== "") {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                }
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });

    // Handle equal button separately
    equalButton.addEventListener("click", function () {
        try {
            history = currentInput;
            currentInput = eval(currentInput);
        } catch (error) {
            currentInput = "Error";
        }
        updateDisplay();
    });

    updateDisplay();
});
