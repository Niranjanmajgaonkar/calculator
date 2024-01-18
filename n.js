let string = "";

let buttons = document.querySelectorAll(".btn");
let btnarray = Array.from(buttons);

// Function to update the string and display value
let display_string_on_screen = () => {
document.querySelector("#display").value = string;
};

let cal = (input) => {
  if (input === "=") {
         string = eval(string);
    
  } else if (input === "C" || input === 'backspace') {
    string = "";
  } else {
    string = string + input
  }
  display_string_on_screen();
};

// Click event listener for buttons
btnarray.forEach((button) => {
  button.addEventListener('click', () => {
    cal(button.innerText);
  });
});

// Keyboard event listener for number keys, operators, Enter, Backspace, and "C"
document.addEventListener('keydown', (event) => {
  // Check if the pressed key is a number (0-9)
  if (event.key >= '0' && event.key <= '9') {
    string += event.key;
    display_string_on_screen();
  }

  // Check if the pressed key is an operator (+, -, *)
  if(event.key === '+'){
    cal('+')
  }
  if(event.key === '-'){
    cal('-')
  }
  if(event.key === '*'){
    cal('*')
  }

  // Handle Enter key as "=" button
  if (event.key === '=' || event.key === 'Enter') {
    cal('=');
  }

  // Handle Backspace key press
  if (event.key === 'Backspace') {
 cal('backspace')
  }

  
});
