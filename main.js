const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
let currentval = "";

// Loop through all buttons (NodeList) and attach click events
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText; // Temporarily store the clicked button value as a string
    if (val === "AC") currentval = ""; // Clear all input
    else if (val === "C")
      currentval = currentval.slice(0, -1); // Remove last character
    else if (val === "=") {
      try {
        // Replace 'x^' with '**' 
        currentval = eval(currentval.replaceAll("x^", "**")).toString();
      } catch {
        currentval = "Error"; // Show error if the expression is invalid
      }
    } else currentval += val; // Append clicked value to the current input string
    display.value = currentval; // Update the calculator display
  });
});
