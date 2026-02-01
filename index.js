
// Get the display input
const display = document.getElementById("display");

// Create a variable to store the calculation
let operator = "";
  

// Select all calculator buttons
document.querySelectorAll(".calculator-button button")

//  Loop through all buttons
  .forEach((button) => {
    
    button.addEventListener("click", () => {

      let value = button.getAttribute("data-value");

      // Handle CLEAR (C)
      if (value === "C") {
        operator = "";
        display.value = "";

      // Runs when the delete button is clicked
      } else if (value === "DEL") {
        operator = operator.slice(0, -1);
        display.value = operator;

      // Runs when equals is clicked
      } else if (value === "=") {
        try {
          let safeOperator = operator.replace(/\^/g, "**");
          let result = eval(safeOperator).toString();
        
          operator = result;
          display.value = result;
        } catch (error) {
          display.value = "";
          operator = "";
        }

      } else {
        operator += value;
        display.value = operator;
      }
    });
  });


//  Enable keyboard input for the calculator 

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    operator += key;
    display.value = operator;
  }

  else if (["+", "-", "*", "/", "%"].includes(key)) {
    operator += key;
    display.value = operator;
  }

  else if (key === "^") {
   operator += "^";
    display.value = operator;
  }

  else if (key === "Backspace") {
    operator = operator.slice(0, -1);
    display.value = operator;
  }

  else if (key === "Escape") {
    operator = "";
    display.value = "";
  }

});

